// priority: 500
RegistryOrgan('kubejs:beer_gland')
    .addScore('chestcavity:endurance', 0.5)
    .addScore('chestcavity:nutrition', 1)

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function BeerGlandChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
   if (slotType == GulaSlot) {
        customData['hasBeerGland'] = 2
   } else {
        customData['hasBeerGland'] = 1
   }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:beer_gland')
        .addOnlyStrategy('chest_cavity_update', BeerGlandChestCavityUpdate, 1)
)