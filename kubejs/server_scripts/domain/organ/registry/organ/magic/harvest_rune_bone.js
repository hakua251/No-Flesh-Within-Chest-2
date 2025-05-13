// priority: 500
RegistryOrgan('kubejs:harvest_rune_bone')
    .addScore('chestcavity:defense', -1)
    .addScore('kubejs:magic_capacity', 2)

/**
* @param {OrganEventCustomData} customData
* @param {Internal.LivingHurtEvent} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function HarvestRuneBoneChestCavityTakeOn(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    SetCustomDataMap(entity.chestCavityInstance, 'hasHarvestRuneBone', 1)
}

/**
* @param {OrganEventCustomData} customData
* @param {Internal.LivingHurtEvent} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function HarvestRuneBoneChestCavityTakeOff(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    RemoveCustomDataMap(entity.chestCavityInstance, 'hasHarvestRuneBone')
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:harvest_rune_bone')
        .addOnlyStrategy('organ_take_on', HarvestRuneBoneChestCavityTakeOn)
        .addOnlyStrategy('organ_take_off', HarvestRuneBoneChestCavityTakeOff)
)