// priority: 500
EntityEvents.death(event => {
    const entity = event.entity
    const level = event.level
    if (!entity.getPersistentData().contains('relatedArea')) return
    // if (level.dimension.equals(DUNGEON_DIM)) return
    const source = event.source
    // 掉落出世界的生物不被视为击杀
    // if (entity.getY() < -64) return
    let areaUuid = entity.getPersistentData().getUUID('relatedArea')
    let area = LoquatAreaManager.of(level).get(areaUuid)
    if (!area) return
    area.customDataMap.getOrDefault('entityKilledMap', new Map()).set(entity.getEntityType(), source)
})