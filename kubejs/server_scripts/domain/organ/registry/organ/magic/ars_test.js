/**
* @param {OrganEventCustomData} customData
* @param {Internal.EffectResolveEvent$Pre} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function CandyStomachArsEffectResolvePre(customData, event, organItem, organIndex, slotType) {
    const hitResult = event.rayTraceResult
    if (hitResult instanceof $EntityHitResult) {
        event.spellStats.set
    }
}

// RegistryOrganStrategy(
//     new OrganStrategyModel('kubejs:candy_stomach')
//         .addOnlyStrategy('ars_effect_resolve_pre', CandyStomachArsEffectResolvePre)
// )