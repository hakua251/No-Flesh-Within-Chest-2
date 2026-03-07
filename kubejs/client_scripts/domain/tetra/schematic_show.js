// priority: 500
const TetraSchematicShowStageMap = new Map()
TetraJSEvents.workbenchTileUpdateSchematicList(event => {
    const schematicList = event.schematicList
    const stages = AStagesClient.getServerAndPlayerClientStages()
    let resList = []
    schematicList.forEach(schematic => {
        let key = String(schematic.key)
        if (!TetraSchematicShowStageMap.has(key)) return resList.push(schematic)
        let stageNeed = TetraSchematicShowStageMap.get(key)
        if (stages.contains(stageNeed)) return resList.push(schematic)
    })
    event.schematicList = resList
})

function RegistrySchematicShowStage(key, stageNeed) {
    TetraSchematicShowStageMap.set(key, stageNeed)
}

RegistrySchematicShowStage('single/head/dimension_probe/dimension_probe', 'ftb_dimension_probe_craft_allow')
