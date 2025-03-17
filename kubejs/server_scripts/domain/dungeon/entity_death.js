// priority: 500
EntityEvents.death(event => {
    const entity = event.entity
    if (!entity.persistentData.contains('relatedArea')) return
    const source = event.source
    let areaUuid = entity.persistentData.getUUID('relatedArea')
    let area = LoquatAreaManager.of(event.level).get(areaUuid)
    if (!area) return
    area.customDataMap.getOrDefault('entityKilledMap', new Map()).set(entity.getEntityType(), source)
})