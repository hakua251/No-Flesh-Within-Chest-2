// priority: 500
RegistryOrgan('kubejs:organic_mana_condense')
    .addScore('chestcavity:breath_recovery', 1)
    .addScore('chestcavity:breath_capacity', 1)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingDeathEvent} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function OrganicManaCondenseEntityKill(customData, event, organItem, organIndex, slotType) {
    const sourceEntity = event.source.actual
    const chestCavity = sourceEntity.chestCavityInstance
    const ccInv = chestCavity.inventory
    const invTypeData = chestCavity.getInventoryTypeData()
    let aroundRelativeSlots = GetDirectionRelativeSlotByParam(invTypeData, organIndex, FourDiagonalDirectionOffset)
    for (let slotDefinition of aroundRelativeSlots) {
        let curItem = ccInv.getStackInSlot(slotDefinition.getId())
        if (curItem.isEmpty()) continue
        if (!curItem.is('ars_nouveau:source_jar')) continue
        SourceJarItemAddSource(curItem, 100)
    }
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:organic_mana_condense')
        .addOnlyStrategy('entity_kill', OrganicManaCondenseEntityKill)
)