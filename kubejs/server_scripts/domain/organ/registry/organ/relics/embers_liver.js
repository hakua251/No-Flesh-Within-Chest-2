// priority: 500
RegistryOrgan('kubejs:embers_liver')
    .addScore('chestcavity:detoxification', 1)
    .addScore('chestcavity:fire_resistant', 1)

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function EmbersLiverChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    let attackUp = organItem.getMaxDamage() - organItem.getDamageValue()
    customData.attackDamage.addAttributeModifier(attackUp, 'addition', 'base')
}

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.LivingEntityDeathEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function EmbersLiverEntityKill(customData, event, organItem, organIndex, slotType) {
    const target = event.entity
    /**@type {Internal.LivingEntity} */
    const killer = event.source.actual
    const chestCavity = killer.chestCavityInstance
    if (target.type != 'cataclysm:ignis') return
    if (organItem.getDamageValue() > 0) {
        organItem.setDamageValue(organItem.getDamageValue() - 1)
        chestCavity.inventory.setChanged()
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:embers_liver')
        .addOnlyStrategy('chest_cavity_update', EmbersLiverChestCavityUpdate)
        .addOnlyStrategy('entity_kill', EmbersLiverEntityKill)
)