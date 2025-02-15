// priority: 500
RegistryOrgan('kubejs:infinity_beats')
    .addScore('chestcavity:health', -2)
    .addScore('chestcavity:defense', -2)
    .addScore('chestcavity:breath_recovery', -2)

RegistryOrgan('kubejs:infinity_force')
    .addScore('chestcavity:health', -2)
    .addScore('chestcavity:defense', -2)
    .addScore('chestcavity:breath_recovery', -2)

const InfinityBeatsTempAttackUpUUID = UUID.fromString('686F8285-3FBF-4A22-9F2A-B1D6BA452BA8')
/**
 * @param {any} customData
 * @param {Internal.LivingHurtEvent} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function InfinityBeatsEntityDoDamage(customData, event, organItem, organIndex) {
    /**@type {Internal.LivingEntity} */
    const sourceEntity = event.source.actual
    if (!sourceEntity.isLiving()) return
    if (sourceEntity.hasItemInSlot('mainhand') || sourceEntity.hasItemInSlot('offhand')) return

    let value = 4
    let attributeInstance = sourceEntity.getAttribute('minecraft:generic.attack_damage')
    let oldModifier = attributeInstance.getModifier(InfinityBeatsTempAttackUpUUID)
    if (oldModifier) {
        value = oldModifier.amount + value
    }
    let attributeModifier = new $AttributeModifier(InfinityBeatsTempAttackUpUUID, 'InfinityBeatsTempAttackUp', value, $Operation.ADDITION)

    attributeInstance.removeModifier(InfinityBeatsTempAttackUpUUID)
    attributeInstance.addTransientModifier(attributeModifier)

    customData.thornsDamage = Math.floor(value / 4)
}
OrganEntityDoDamageStrategy.addOnlyStrategy('kubejs:infinity_beats', InfinityBeatsEntityDoDamage)

/**
 * @param {any} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function InfinityBeatsTakeOff(customData, event, organItem, organIndex) {
    const { entity } = event
    let attributeInstance = entity.getAttribute('minecraft:generic.attack_damage')
    attributeInstance.removeModifier(InfinityBeatsTempAttackUpUUID)
}
OrganTakeOffStrategy.addOnlyStrategy('kubejs:infinity_beats', InfinityBeatsTakeOff)



const InfinityForceAttackUpUUID = UUID.fromString('67580408-8DF1-40EB-8DCB-50B10DB9C480')
/**
 * @param {any} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function InfinityForceEntityChestCavityUpdate(customData, event, organItem, organIndex) {
    /**@type {Internal.LivingEntity} */
    const entity = event.entity
    if (!entity.isLiving()) return
    if (!organItem.hasNBT() || !organItem.nbt.contains('forgeTimes')) return
    let value = organItem.nbt.getInt('forgeTimes')

    let attributeInstance = entity.getAttribute('minecraft:generic.attack_damage')
    let attributeModifier = new $AttributeModifier(InfinityForceAttackUpUUID, 'InfinityForceAttackUp', value, $Operation.ADDITION)

    attributeInstance.removeModifier(InfinityForceAttackUpUUID)
    attributeInstance.addTransientModifier(attributeModifier)
}
OrganChestCavityUpdateStrategy.addOnlyStrategy('kubejs:infinity_force', InfinityForceEntityChestCavityUpdate)


/**
 * @param {any} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function InfinityForceTakeOff(customData, event, organItem, organIndex) {
    const { entity } = event
    let attributeInstance = entity.getAttribute('minecraft:generic.attack_damage')
    attributeInstance.removeModifier(InfinityForceAttackUpUUID)
}
OrganTakeOffStrategy.addOnlyStrategy('kubejs:infinity_force', InfinityForceTakeOff)

/**
 * @param {any} customData
 * @param {Internal.LootContextJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function InfinityForceEntityLoot(customData, event, organItem, organIndex) {
    if (Math.random() > Math.max(0.03 * event.killerEntity.getLuck(), 0.03)) {
        return
    }
    if (BossEntityTypeList.some(ele => ele == event.entity.getType())) {
        let forgeTimes = 0
        if (organItem.hasNBT() && organItem.nbt.contains('forgeTimes')) {
            forgeTimes = organItem.nbt.getInt('forgeTimes')
        }
        
        event.addLoot(Item.of('kubejs:infinity_force', { forgeTimes: Math.floor(Math.random() * forgeTimes) }))
    }
}
OrganEntityLootStrategy.addOnlyStrategy('kubejs:infinity_force', InfinityForceEntityLoot)



