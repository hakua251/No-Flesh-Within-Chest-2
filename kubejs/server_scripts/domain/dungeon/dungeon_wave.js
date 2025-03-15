// priority: 800
LoquatEvents.areaSpawnMobWaveEnd(event => {
    const context = event.context
    const level = event.level
    const area = context.area
    console.log('areaSpawnMobWaveEnd')
    context.setWaveEndTicks(context.ticksExisted + 20 * 5)
    /**@type {Internal.PathfinderMob} */
    let entity = level.createEntity('minecraft:husk')
    let spawnPosOpt = area.findSpawnPos(level, 'spawnZone', entity)
    if (!spawnPosOpt.isPresent()) return
    let spawnPos = spawnPosOpt.get()
    console.log(spawnPos)
    entity.setPos(spawnPos.getX(), spawnPos.getY(), spawnPos.getZ())
    entity.setPersistenceRequired()
    entity.loquat$setRestriction(context)
    entity.spawn()
})