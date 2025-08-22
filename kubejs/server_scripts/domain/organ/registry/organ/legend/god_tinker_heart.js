// priority: 500
RegistryOrgan('kubejs:god_tinker_heart')
    .addScore('chestcavity:health', 1)
    .addScore('kubejs:extreme_fitness', 2)

/**
 * 
 * @param {OrganChestCavityUpdateStrategyCustomData} customData 
 * @param {Internal.LootContextJS} event 
 * @param {Internal.ItemStack} organItem 
 * @param {number} organIndex 
 * @param {string} slotType 
 */
function GodTinkerHeartChestLoot(customData, event, organItem, organIndex, slotType) {
    let curDamage = organItem.getDamageValue()
    if (curDamage <= 0) return
    let repairValue = event.loot.length
    curDamage = curDamage > repairValue ? curDamage - repairValue : 0
    organItem.setDamageValue(curDamage)
}

/**
 * 
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.NetworkEventJS} event
 * @param {Internal.ItemStack} organItem 
 * @param {number} organIndex 
 * @param {string} slotType 
 */
function GodTinkerHeartKeyActive(customData, event, organItem, organIndex, slotType) {
    if (organItem.getDamageValue() > 0) return
    const player = event.player
    let mainHandTool = SimpleTCon.getToolInSlot(player, 'mainhand')
    if (!mainHandTool) return
    let godTinkerModifier = SimpleTCon.getModifierId('kubejs:god_tinker')
    let godTinkerLevel = mainHandTool.getModifierLevel(godTinkerModifier)
    if (godTinkerLevel >= 3) return
    organItem.setDamageValue(organItem.getMaxDamage())
    mainHandTool.addModifier(godTinkerModifier, 1)
}



RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:god_tinker_heart')
        .addOnlyStrategy('chest_loot', GodTinkerHeartChestLoot, 1)
        .addOnlyStrategy('key_active', GodTinkerHeartKeyActive)
)

