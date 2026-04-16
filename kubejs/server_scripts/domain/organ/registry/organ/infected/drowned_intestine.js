// priority: 500
RegistryOrgan('kubejs:drowned_intestine')
    .addScore('chestcavity:detoxification', 1)
    .addScore('chestcavity:nutrition', -1)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OrganAddStatusEffectJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function DrownedIntestineOrganAddStatusEffect(customData, event, organItem, organIndex, slotType) {
    const effectInstance = event.effect
    if (effectInstance.getEffect().equals($MobEffects.HUNGER)) {
        event.setEffect(new $MobEffectInstance('minecraft:regeneration', effectInstance.getDuration(), effectInstance.getAmplifier()))
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:drowned_intestine')
        .addOnlyStrategy('organ_add_status_effect', DrownedIntestineOrganAddStatusEffect)
)