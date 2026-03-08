// priority: 500
/**
 * @param {SchematicShowStrategyCustomData} customData 
 * @param {Internal.WorkbenchTileUpdateSchematicListJS} event 
 * @param {Internal.ItemStack} targetItemStack 
 * @param {Internal.Schematic} schematic 
 */
function SchematicShowFlambergeBlade(customData, event, targetItemStack, schematic) {
    const stages = AStagesClient.getServerAndPlayerClientStages()
    if (stages.contains('ftb_genesis_process_done')) return customData.resList.push(schematic)
    if (IsPreForge(targetItemStack, PreForgeTypeFlamberge)) return customData.resList.push(schematic)
}
RegistrySchematicShowStrategy('sword/flamberge/flamberge_blade', SchematicShowFlambergeBlade)