// priority: 500
/**
 * @param {SchematicShowStrategyCustomData} customData 
 * @param {Internal.WorkbenchTileUpdateSchematicListJS} event 
 * @param {Internal.ItemStack} stack 
 * @param {Internal.Schematic} schematic 
 */
function SchematicShowAncientFlambergeBlade(customData, event, stack, schematic) {
    const stages = AStagesClient.getServerAndPlayerClientStages()
    if (stages.contains('ftb_genesis_process_done')) return customData.resList.push(schematic)
    /**@type {Internal.ModularItem} */
    const modularItem = stack.getItem()
    // 非传古武器烧伤技能效率需要大于等于15，对应打磨4的改良属性
    let burnsEfficiency = modularItem.getEffectEfficiency(stack, 'kubejs:burns')
    if (burnsEfficiency < 20) return
    let attackDamageAttributeValue = modularItem.getAttributeValue(stack, 'minecraft:generic.attack_damage')
    if (attackDamageAttributeValue < 11) return
    customData.resList.push(schematic)
}
RegistrySchematicShowStrategy('sword/ancient_flamberge/ancient_flamberge_blade', SchematicShowAncientFlambergeBlade)