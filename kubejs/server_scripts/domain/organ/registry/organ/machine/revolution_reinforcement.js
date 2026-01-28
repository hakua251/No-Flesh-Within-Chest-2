// priority: 500
const RevolutionOrganIds = Ingredient.of('#kubejs:revolution').getItemIds().toArray()
RegistryOrgan('kubejs:revolution_reinforcement')
    .addScore('chestcavity:defense', 1.5)
    .addScore('chestcavity:fire_resistant', 0.5)

/**
 * @param {AirdropDeathEventCustomData} customData 
 * @param {Internal.LivingEntityDeathEventJS} event 
 */
function RevolutionAirdropStrategy(customData, event) {
    let drawCount = Math.random() < 0.5 ? 1 : 2
    let randomStackIds = RandomGetN(RevolutionOrganIds, drawCount)
    let randomStacks = randomStackIds.map(v => Item.of(v))
    customData.lootList = customData.lootList.concat(randomStacks)
}
RegistryAirDropDeathStrategy('revoluation_reinforcement', RevolutionAirdropStrategy)

/**
* @param {OrganEventCustomData} customData
* @param {Internal.LivingHurtEvent} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function RevolutionReinforcementChestCavityTakeOn(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    /**@type {Map<string, WeightRandomItem[]>} */
    let koiFishPool = GetCustomDataMap(entity.chestCavityInstance, 'koiFishPool', new Map())
    koiFishPool.set('revoluation_reinforcement', [new WeightRandomItem('revoluation_reinforcement', 3)])
    SetCustomDataMap(entity.chestCavityInstance, 'koiFishPool', koiFishPool)
}

/**
* @param {OrganEventCustomData} customData
* @param {Internal.LivingHurtEvent} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function RevolutionReinforcementChestCavityTakeOff(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    /**@type {Map<string, WeightRandomItem[]>} */
    let koiFishPool = GetCustomDataMap(entity.chestCavityInstance, 'koiFishPool', new Map())
    koiFishPool.delete('revoluation_reinforcement')
    SetCustomDataMap(entity.chestCavityInstance, 'koiFishPool', koiFishPool)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:revolution_reinforcement')
        .addOnlyStrategy('organ_take_on', RevolutionReinforcementChestCavityTakeOn)
        .addOnlyStrategy('organ_take_off', RevolutionReinforcementChestCavityTakeOff)
)
