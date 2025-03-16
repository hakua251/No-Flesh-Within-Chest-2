// priority: 3000
/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.SpawnMobAreaKubeEvent} context 
 * @param {Internal.PathfinderMob} entity 
 * @returns 
 */
function DungeonCreateEntity(level, context, entity) {
    const area = context.area
    let spawnPosOpt = area.findSpawnPos(level, 'spawnZone', entity)
    if (!spawnPosOpt.isPresent()) return
    let spawnPos = spawnPosOpt.get()
    entity.setPos(spawnPos.getX(), spawnPos.getY(), spawnPos.getZ())
    entity.setPersistenceRequired()
    entity.loquat$setRestriction(context)
    entity.persistentData.putUUID('relatedArea', area.getUuid())
    entity.spawn()
}