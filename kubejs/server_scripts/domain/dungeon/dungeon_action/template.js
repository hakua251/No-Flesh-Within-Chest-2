// priority: 1000
new DungeonEventActionModel('killAmountTask_ZombieGroupTask_1')
    .setInitAction((level, context, areaManager) => {
    })
    .setFinishAction((level, context, areaManager, isWin) => {
        CommonDungeonFinishAction(level, context, areaManager, isWin)
    })
    .addWave(NewKillAmountWave(1, 20 * 5, (level, context, areaManager) => {
        const dungeonAttr = GetDungeonAttribute(context)
        for (let i = 0; i < 8; i++) {
            /**@type {Internal.PathfinderMob} */
            let entity = level.createEntity('minecraft:zombie')
            CommonDungeonEntityCreate(level, context, areaManager, entity, dungeonAttr)
        }
    }))
    .addWave(NewKillAmountWave(1, 20 * 5, (level, context, areaManager) => {
        const dungeonAttr = GetDungeonAttribute(context)
        for (let i = 0; i < 8; i++) {
            /**@type {Internal.PathfinderMob} */
            let entity = level.createEntity('minecraft:zombie')
            CommonDungeonEntityCreate(level, context, areaManager, entity, dungeonAttr)
        }
    }))
    .registry()


new DungeonEventActionModel('killAmountTask_ZombieGroupTask_2')
    .setInitAction((level, context, areaManager) => {
    })
    .setFinishAction((level, context, areaManager, isWin) => {
        CommonDungeonFinishAction(level, context, areaManager, isWin)
    })
    .addWave(NewContinousKillAmountWave(10, 20 * 60, (level, context, areaManager) => {
        const dungeonAttr = GetDungeonAttribute(context)
        for (let i = 0; i < 3; i++) {
            /**@type {Internal.PathfinderMob} */
            let entity = level.createEntity('minecraft:zombie')
            CommonDungeonEntityCreate(level, context, areaManager, entity, dungeonAttr)
        }
    }))
    .addWave(NewContinousKillAmountWave(10, 20 * 60, (level, context, areaManager) => {
        const dungeonAttr = GetDungeonAttribute(context)
        for (let i = 0; i < 3; i++) {
            /**@type {Internal.PathfinderMob} */
            let entity = level.createEntity('minecraft:zombie')
            CommonDungeonEntityCreate(level, context, areaManager, entity, dungeonAttr)
        }
    }))
    .registry()