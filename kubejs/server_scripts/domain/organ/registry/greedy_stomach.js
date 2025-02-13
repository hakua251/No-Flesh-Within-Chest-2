// priority: 500
RegistryOrgan('kubejs:greedy_stomach')
    .addScore('chestcavity:digestion', 0.5)
    .addScore('chestcavity:health', 1)


OrganFoodEatenStrategy.addOnlyStrategy('kubejs:greedy_stomach', GreedyStomachItemEaten)

/**
 * @param {any} customData
 * @param {Internal.FoodEatenEventJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function GreedyStomachItemEaten(customData, event, organItem, organIndex) {
    event.player.giveExperiencePoints(30)
}