// priority: 500
EntityEvents.death(event => {
    const entity = event.entity
    if (!entity.persistentData.contains('relatedArea')) return
    const source = event.source
    let areaUuid = entity.persistentData.getUUID('relatedArea')
    let area = LoquatAreaManager.of(event.level).get(areaUuid)
    if (!area) return
    console.log('entity killed')
    area.customDataMap.getOrDefault('entityKilledMap', new Map()).set(entity.getUuid(), source)
})