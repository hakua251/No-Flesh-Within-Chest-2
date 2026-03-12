// priority: 500
/**
 * @param {SchematicShowStrategyCustomData} customData 
 * @param {Internal.WorkbenchTileUpdateSchematicListJS} event 
 * @param {Internal.ItemStack} stack 
 * @param {Internal.Schematic} schematic 
 */
function SchematicShowDimensionProbe(customData, event, stack, schematic) {
    const stages = AStagesClient.getServerAndPlayerClientStages()
    if (stages.contains('ftb_dimension_probe_craft_allow')) return customData.resList.push(schematic)
}
RegistrySchematicShowStrategy('single/head/dimension_probe/dimension_probe', SchematicShowDimensionProbe)