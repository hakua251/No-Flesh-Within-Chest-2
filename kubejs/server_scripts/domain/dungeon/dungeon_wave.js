// priority: 800
LoquatEvents.areaSpawnMobWaveTick(event => {
    const context = event.context
    if (context.ticksExisted % 20 != 0) return

    const level = event.level
    const area = context.area
    const areaManager = event.getAreaManager()
    const customDataMap = context.customDataMap

    if (!customDataMap.containsKey('dungeonEventAction')) {
        /**@type {DungeonEventActionModel} */
        let dungeonEventModel = DungeonSpawnerIdMap[context.spawnerId]
        customDataMap.put('dungeonEventAction', dungeonEventModel)
        customDataMap.put('curWaveInit', false)
        // todo 地牢初始化行为
        dungeonEventModel.initAction(level, context, areaManager)
    }

    /**@type {DungeonEventActionModel} */
    let dungeonEventModel = customDataMap.get('dungeonEventAction')
    let waveId = context.waveId
    // 如果波次不存在，回收该区域
    if (dungeonEventModel.waves.length <= waveId || waveId < 0) {
        dungeonEventModel.successAction(level, context, areaManager)
        areaManager.remove(area.getUUID())
        areaManager.setDirty()
        return
    }
    
    let waveAction = dungeonEventModel.waves[waveId]
    if (!customDataMap.getOrDefault('curWaveInit', false)) {
        waveAction.initAction(level, context, areaManager)
        customDataMap.put('curWaveInit', true)
    }

    let shouldFinishWave = waveAction.tickTester(level, context, areaManager)
    if (context.waveEndTicks < context.ticksExisted || shouldFinishWave) {
        customDataMap.put('curWaveInit', false)
        // 如果不满足波次要求，则回收该区域
        if (!waveAction.endTester(level, context, areaManager)) {
            dungeonEventModel.failAction(level, context, areaManager)
            areaManager.remove(areaUuid)
            areaManager.setDirty()
            return
        }
        let dungeonSuccess = waveAction.finishAction(level, context, areaManager)
        if (dungeonSuccess) {
            dungeonEventModel.successAction(level, context, areaManager)
            areaManager.remove(area.getUuid())
            areaManager.setDirty()
            return
        }
    } else {
        waveAction.tickAction(level, context, areaManager)
    }
})