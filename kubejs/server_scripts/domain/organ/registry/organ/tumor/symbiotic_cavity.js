// priority: 500
RegistryOrgan('kubejs:symbiotic_cavity')
    .addScore('chestcavity:nerves', 1)
    .addScore('kubejs:immunosuppression', 1)

/**
 * 
 * @param {Internal.PathfinderMob} entity 
 */
function OrganSymbiosisGoal(entity) {
    return new $CustomGoal(
        'organ_symbiosis',
        entity,
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 何时能够使用
            let itemEntityList = GetItemEntityWithinRadius(mob.level, mob.blockPosition(), 5, (plevel, entity) => {
                let item = entity.item
                return item.hasTag('kubejs:organ')
                    && item.hasNBT()
                    && item.getNbt().contains('chestcavity:organ_compatibility')
            })
            return itemEntityList.length > 0
        },
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 能否继续使用 
            return true
        },
        true, // 是否允许中断
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 开启时执行
        },
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 停止时执行
        },
        false, // 是否每个tick都需要更新
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // tick
            // 寻找最近的实体并且拾取
            const mobPos = mob.blockPosition()
            const level = mob.level
            if (mob.navigation.isInProgress()) return
            /**@type {Internal.ItemEntity} */
            let nearestItemEntity = GetNearestEntity(level, mobPos, 5, (plevel, entity) => {
                if (!(entity instanceof $ItemEntity)) return false
                let item = entity.item
                return item.hasTag('kubejs:organ')
                    && item.hasNBT()
                    && item.getNbt().contains('chestcavity:organ_compatibility')
            })
            if (!nearestItemEntity) return
            let targetPos = nearestItemEntity.blockPosition()
            let dist = mobPos.distSqr(targetPos)
            if (dist <= 2) {
                let organStack = nearestItemEntity.getItem().copy()
                ChestCavityUtils.removeOrganCompatibility(organStack)
                nearestItemEntity.discard()
                SpawnItemEntityWithMovement(level, mobPos, organStack, new Vec3d(0, 0, 0))
            } else {
                mob.navigation.moveTo(targetPos.x, targetPos.y, targetPos.z, 1.0)
            }
        },
    )
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function SymbioticCavityTakeOn(customData, event, organItem, organIndex, slotType) {
    /** @type {Internal.PathfinderMob} */
    const entity = event.entity
    if (!(entity instanceof $PathfinderMob)) return
    let organSymbiosisGoal = OrganSymbiosisGoal(entity)
    entity.goalSelector.addGoal(3, organSymbiosisGoal)
    const chestCavity = event.chestCavity
    chestCavity.customDataMap.put('organSymbiosisGoal', organSymbiosisGoal)
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function SymbioticCavityTakeOff(customData, event, organItem, organIndex, slotType) {
    /** @type {Internal.PathfinderMob} */
    const entity = event.entity
    if (!(entity instanceof $PathfinderMob)) return
    const chestCavity = event.chestCavity
    if (!chestCavity.customDataMap.containsKey('organSymbiosisGoal')) return
    let organSymbiosisGoal = chestCavity.customDataMap.get('organSymbiosisGoal')
    entity.goalSelector.removeGoal(organSymbiosisGoal)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:symbiotic_cavity')
        .addOnlyStrategy('organ_take_on', SymbioticCavityTakeOn)
        .addOnlyStrategy('organ_take_off', SymbioticCavityTakeOff)
)