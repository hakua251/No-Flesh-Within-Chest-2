// priority: 3000
/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.SpawnMobAreaKubeEvent} context 
 * @param {Internal.PathfinderMob} entity 
 * @returns {boolean}
 */
function DungeonCreateEntity(level, context, entity) {
    const area = context.area
    let spawnPosOpt = area.findSpawnPos(level, 'spawnZone', entity)
    let spawnPos = BlockPos.ZERO
    if (spawnPosOpt.isPresent()) {
        spawnPos = spawnPosOpt.get()
    } else {
        let center = area.getCenter()
        spawnPos = new BlockPos(center.x(), center.y(), center.z())
    }
    entity.getPersistentData().putUUID('relatedArea', area.getUuid())
    entity.setPos(spawnPos.getX(), spawnPos.getY(), spawnPos.getZ())
    entity.setPersistenceRequired()
    entity.loquat$setRestriction(context)
    entity.spawn()
    return true
}

/**
 * 
 * @param {Internal.Level} level
 * @param {Internal.Area} area 
 */
function EntityInArea(level, area) {
    let aabb = area.getRoughAABB()
    return level.getEntitiesWithin(aabb)
}


/**
 * 删除掉区域生成的生物（遗留生物）
 * @param {Internal.Level} level
 * @param {Internal.Area} area 
 */
function ClearEntityRemainInArea(level, area) {
    let entityAABBList = EntityInArea(level, area)
    let areaUuid = area.getUuid()
    entityAABBList.forEach(entity => {
        // 清空AABB里面可能的生物残留
        if (entity.getPersistentData().contains('relatedArea') && entity.getPersistentData().getUUID('relatedArea').equals(areaUuid)) {
            entity.remove('discarded')
            return
        }
    })
}


/**
 * 设置当前波次的状态
 * @param {Internal.Map<string, any>} customDataMap 
 * @param {number} status 
 */
function SetWaveStatus(customDataMap, status) {
    customDataMap.put('waveStatus', status)
    return
}

/**
 * 获取当前波次的状态
 * @param {Internal.Map<string, any>} customDataMap
 * @returns {number}
 */
function GetWaveStatus(customDataMap) {
    return customDataMap.getOrDefault('waveStatus', 0)
}

/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.Area} area 
 * @returns {Internal.ServerPlayer[]}
 */
function GetAreaPlayerList(level, area) {
    let playerList = []
    let aabb = area.getRoughAABB()
    let entityAABBList = level.getEntitiesWithin(aabb)
    entityAABBList.forEach(entity => {
        if (entity.isPlayer() && entity instanceof $ServerPlayer) {
            playerList.push(entity)
            return
        }
    })
    return playerList
}

/**
 * 
 * @param {Internal.SpawnMobAreaKubeEvent} context 
 * @returns 
 */
function GetDungeonAttribute(context) {
    const area = context.area
    const persistentData = area.getPersistentData()
    return new DungeonAttributeModel(persistentData)
}

/**
 * 
 * @param {Internal.Area} area 
 * @returns 
 */
function GetAreaObeliskBlockPos(area) {
    const persistentData = area.getPersistentData()
    if (!persistentData.contains('obeliskBlockPos')) {
        let centerPos = area.getCenter()
        return new BlockPos(centerPos.x(), centerPos.y() - 2, centerPos.z())
    }
    let blockPosNbt = persistentData.get('obeliskBlockPos')
    return ConvertNbt2Pos(blockPosNbt)
}

/**
 * 
 * @param {Internal.ServerLevel} level
 * @param {Internal.Area} area 
 * @param {Internal.ItemStack[]} lootList 
 */
function SpawnDungeonLoot(level, area, lootList) {
    /**@type {Internal.ItemStack[][]} */
    let itemChunks = SliceChunkArray(lootList, 3)
    let obeliskBlockPos = GetAreaObeliskBlockPos(area)
    let tickCounter = 5
    itemChunks.forEach(itemChunk => {
        level.server.scheduleInTicks(tickCounter, callback => {
            itemChunk.forEach(item => {
                let itemEntity = new $ItemEntity(level, obeliskBlockPos.getX(), obeliskBlockPos.getY() + 10, obeliskBlockPos.getZ(), item)
                let spawnPosOpt = area.findSpawnPos(level, 'spawnZone', itemEntity)
                if (spawnPosOpt.isPresent()) {
                    let spawnPos = spawnPosOpt.get()
                    itemEntity.setPos(spawnPos.getX(), spawnPos.getY() + 10, spawnPos.getZ())
                }
                itemEntity.setDefaultPickUpDelay()
                level.addFreshEntity(itemEntity)
            })
        })
        tickCounter = tickCounter + 10
    })
}


/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.SpawnMobAreaKubeEvent} context 
 * @param {LoquatAreaManager} area 
 * @param {Internal.PathfinderMob} entity 
 * @param {DungeonAttributeModel} dungeonAttr
 */
function ApplyCreateEntityModifier(level, context, areaManager, entity, dungeonAttr) {
    if (dungeonAttr.modifierList.length > 0) {
        DungeonCreateEntityModifierStrategy.run(dungeonAttr.modifierList, [level, context, areaManager, entity, dungeonAttr], {})
    }
}

/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.SpawnMobAreaKubeEvent} context 
 * @param {LoquatAreaManager} area 
 * @param {Internal.ItemStack[]} lootList 
 * @param {DungeonAttributeModel} dungeonAttr
 */
function ApplyLootModifier(level, context, areaManager, lootList, dungeonAttr) {
    if (dungeonAttr.modifierList.length > 0) {
        DungeonLootModifierStrategy.run(dungeonAttr.modifierList, [level, context, areaManager, lootList, dungeonAttr], {})
    }
}
