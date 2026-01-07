// priority: 500
RegistryOrgan('kubejs:worm_of_taste')
    .addScore('chestcavity:filtration', 2)
    .addScore('chestcavity:endurance', 1)

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function WormOfTasteChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const player = event.getPlayer()
    const chestCavity = event.chestCavity
    const ccInv = chestCavity.inventory
    const invTypeData = chestCavity.getInventoryTypeData()

    let aroundRelativeSlots = GetEightDirectionRelativeSlot(invTypeData, organIndex)
    let value = 0
    for (let slotDefinition of aroundRelativeSlots) {
        let pItem = ccInv.getStackInSlot(slotDefinition.getId())
        if (pItem.isEmpty() || !pItem.isEdible()) continue
        let foodProperties = pItem.getFoodProperties(player)
        let foodHunger = foodProperties.getNutrition()
        value += foodHunger
    }
    customData.attackDamage.addAttributeModifier(value / 4, 'addition', 'base')
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:worm_of_taste')
        .addOnlyStrategy('food_eaten', WormOfTasteChestCavityUpdate)
)