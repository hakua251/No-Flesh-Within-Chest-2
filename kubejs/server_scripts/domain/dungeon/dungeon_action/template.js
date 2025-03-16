// priority: 500
const testDungeonSpawner = new DungeonEventActionModel('test')
    .setSuccessAction((level, context, areaManager) => {
        const area = context.area
        let aabb = area.getRoughAABB()
        let entityAABBList = level.getEntitiesWithin(aabb)
        entityAABBList.forEach(entity => {
            // 清空AABB里面可能的生物残留
            if (entity.persistentData.contains('relatedArea') && entity.persistentData.getUUID('relatedArea').equals(areaUuid)) {
                entity.remove('discarded')
                return
            }
            if (entity.isPlayer()) {
                entity.tell('挑战成功')
                return
            }
        })
        console.log('successDungeon')
    })
    .addWave(
        new DungeonWaveModel()
            .setInitAction((level, context, areaManager) => {
                const customDataMap = context.customDataMap
                const area = context.area
                // 初始化bossBar展示
                let customBossEvent = new $CustomBossEvent(new ResourceLocation('kubejs:test'), '测试BossBar')
                customBossEvent.setProgress(1)
                customDataMap.put('customBossEvent', customBossEvent)

                let aabb = area.getRoughAABB()
                let entityAABBList = level.getEntitiesWithin(aabb)
                let areaUuid = area.getUuid()
                entityAABBList.forEach(entity => {
                    // 清空AABB里面可能的生物残留
                    if (entity.persistentData.contains('relatedArea') && entity.persistentData.getUUID('relatedArea').equals(areaUuid)) {
                        entity.remove('discarded')
                        return
                    }
                    // 记录玩家信息
                    if (entity.isPlayer() && entity instanceof $ServerPlayer) {
                        customBossEvent.addPlayer(entity)
                        area.customDataMap.getOrDefault('players', []).push(entity)
                        return
                    }
                })
                // 刷新实体击杀信息
                area.customDataMap.put('entityKilledMap', new Map())

                // 生成生物
                for (let i = 0; i < 5; i++) {
                    let entity = level.createEntity('minecraft:cat')
                    DungeonCreateEntity(level, context, entity)
                }
                context.setCurrentWaveTime(20 * 30)
                console.log('init')
            })
            .setTickAction((level, context, areaManager) => {
                const customDataMap = context.customDataMap
                if (customDataMap.containsKey('customBossEvent')) {
                    /**@type {Internal.CustomBossEvent} */
                    let customBossEvent = customDataMap.get('customBossEvent')
                    customBossEvent.setProgress((context.waveEndTicks - context.ticksExisted) / (20 * 30))
                }
                console.log('tick')
            })
            .setFinishAction((level, context, areaManager) => {
                const customDataMap = context.customDataMap
                if (customDataMap.containsKey('customBossEvent')) {
                    /**@type {Internal.CustomBossEvent} */
                    let customBossEvent = customDataMap.get('customBossEvent')
                    customBossEvent.removeAllPlayers()
                }
                console.log('finish')
                return true
            })
            .setTickTester((level, context, areaManager) => {
                return false
            })
            .setEndTester((level, context, areaManager) => {
                const area = context.area
                if (area.customDataMap.containsKey('entityKilledMap')) {
                    /**@type {Map<Internal.UUID, DamageSource>} */
                    let entityKilledMap = area.customDataMap.get('entityKilledMap')
                    if (entityKilledMap.size > 1) {
                        return true
                    }
                }
                console.log('endTester')
                return false
            })
    )

