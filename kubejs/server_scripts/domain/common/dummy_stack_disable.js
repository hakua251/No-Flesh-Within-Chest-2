// priority: 500
EntityEvents.spawned('dummmmmmy:target_dummy', event => {
    const entity = event.entity
    const level = event.level
    let curBB = entity.getBoundingBox()
    if (level.getEntitiesOfClass($TargetDummyEntity, curBB).size() > 0) {
        entity.dismantle(true)
        event.cancel()
    }
})