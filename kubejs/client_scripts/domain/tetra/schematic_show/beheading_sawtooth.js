// priority: 500
/** todo 没写条件
 * @param {SchematicShowStrategyCustomData} customData 
 * @param {Internal.WorkbenchTileUpdateSchematicListJS} event 
 * @param {Internal.ItemStack} stack 
 * @param {Internal.Schematic} schematic 
 */
function SchematicShowBeheadingSawtooth(customData, event, stack, schematic) {
    const stages = AStagesClient.getServerAndPlayerClientStages()
    if (stages.contains('ftb_genesis_process_done')) return customData.resList.push(schematic)
    /**@type {Internal.ModularItem} */
    const modularItem = stack.getItem()
    let attackDamageAttributeValue = modularItem.getAttributeValue(stack, 'minecraft:generic.attack_damage', 1)
    if (attackDamageAttributeValue < 9) return
    let maxDamage = modularItem.getMaxDamage(stack)
    if (maxDamage < 2000) return
    customData.resList.push(schematic)
}
RegistrySchematicShowStrategy('sword/beheading_sawtooth', SchematicShowBeheadingSawtooth)
