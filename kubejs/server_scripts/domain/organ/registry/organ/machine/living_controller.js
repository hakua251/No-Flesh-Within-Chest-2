// priority: 500
RegistryOrgan('kubejs:living_controller')
    .addScore('chestcavity:health', -0.5)
    .addScore('kubejs:magic_capacity', -3)


function LivingControllerEntityTick(customData, event, organItem, organIndex, slotType) {
    let targetLiving = GetRemoteControlTarget(event.level, organItem)
    if (!targetLiving) return
    if (targetLiving instanceof $PathfinderMob) {
        if (!targetLiving.hasEffect('kubejs:remote_control')) {
            targetLiving.potionEffects.add('kubejs:remote_control', 20 * 60)
        } else {
            let effectInstance = targetLiving.getEffect('kubejs:remote_control')
            if (effectInstance && effectInstance.duration <= 20 * 10) {
                effectInstance.setDuration(20 * 60)
            }
        }
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:living_controller')
        .addStrategy('entity_tick', LivingControllerEntityTick)
)

/**
 * 
 * @param {Internal.ServerPlayer} level 
 * @param {Internal.ItemStack} organItem 
 * @returns 
 */
function GetRemoteControlTarget(level, organItem) {
    if (!organItem.hasNBT()) return
    let nbt = organItem.getNbt()
    if (!nbt.contains('bindEntity')) return
    let bindEntityNbt = nbt.getCompound('bindEntity')
    let targetUuid = bindEntityNbt.getUUID('uuid')
    return level.getEntity(targetUuid)
}

ItemEvents.entityInteracted('kubejs:living_controller', event => {
    const target = event.target
    const item = event.item
    let nbt = item.getOrCreateTag()
    if (target instanceof $PathfinderMob) {
        let bindEntityNbt = new $CompoundTag()
        bindEntityNbt.putUUID('uuid', target.getUuid())
        bindEntityNbt.putString('name', target.name.getString())
        nbt.put('bindEntity', bindEntityNbt)
        item.setNbt(nbt)
    }
})