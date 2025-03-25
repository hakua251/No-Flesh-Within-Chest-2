// priority: 500
RegistryOrgan('kubejs:hop_kidney')
    .addScore('chestcavity:detoxification', 0.5)
    .addScore('chestcavity:filtration', 1.5)
    .addScore('chestcavity:photosynthesis', 0.5)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function HopKidneyDoDamageDefer(customData, event, organItem, organIndex, slotType) {
    /**@type {Internal.LivingEntity} */
    const source = event.source.actual
    /**@type {Internal.LivingEntity} */
    const target = event.entity
    if (!target.isAlive()) return
    if (!target.hasEffect('kubejs:putrid_toxins')) return
    let effect = target.getEffect('kubejs:putrid_toxins')
    let damage = GetPutridToxinsDamage(target)
    // 强化效果，如果伤害小于快照伤害，则延长效果时长；且不在具有内置冷却
    if (event.amount < damage) return
    SetPutridToxinsDamage(target, event.amount)
    if (source.isPlayer()) {
        source.addItemCooldown('kubejs:hop_kidney', 20 * 3)
    }
    target.potionEffects.add('kubejs:putrid_toxins', effect.duration, effect.amplifier + 1, false, false)
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function HopKidneyDoDamage(customData, event, organItem, organIndex, slotType) {
    /**@type {Internal.LivingEntity} */
    const source = event.source.actual
    if (source.isPlayer() && source.getCooldowns().isOnCooldown('kubejs:hop_kidney')) {
        return
    }
    customData.localDefers.push(new OrganLocalDeferModel([event, organItem, organIndex, slotType], HopKidneyDoDamageDefer, organIndex))
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:hop_kidney')
        .addOnlyStrategy('entity_do_damage', HopKidneyDoDamage)
)

