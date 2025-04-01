// priority: 500
EntityEvents.death(event => {
    const entity = event.entity
    if (!entity.getPersistentData().contains('relatedArea')) return
    const source = event.source
    let areaUuid = entity.getPersistentData().getUUID('relatedArea')
    let area = LoquatAreaManager.of(event.level).get(areaUuid)
    if (!area) return
    area.customDataMap.getOrDefault('entityKilledMap', new Map()).set(entity.getEntityType(), source)
})