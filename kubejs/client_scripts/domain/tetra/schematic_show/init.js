// priority: 1000
const SchematicShowStrategy = new StrategyModel()
/**
 * @typedef {Object} SchematicShowStrategyCustomData
 * @property {Internal.List<Internal.UpgradeSchematic>} resList
 */
/**
 * @param {String} key 
 * @param {function(any[]): void} func 
 */
function RegistrySchematicShowStrategy(key, func) {
    SchematicShowStrategy.addStrategy(key, func)
}

TetraJSEvents.workbenchTileUpdateSchematicList(event => {
    const workbenchTile = event.workbenchTile
    const targetItemStack = workbenchTile.getTargetItemStack()
    const schematicList = event.schematicList
    const customData = { resList: [] }
    schematicList.forEach(schematic => {
        let key = schematic.key
        if (!SchematicShowStrategy.contains(key)) return customData.resList.push(schematic)
        SchematicShowStrategy.run([key], [event, targetItemStack, schematic], customData)
    })
    event.schematicList = customData.resList
})
