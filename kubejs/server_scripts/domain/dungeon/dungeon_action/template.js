// priority: 1000
const ZombieGroupTask = new DungeonEventActionModel('test')
    .setInitAction((level, context, areaManager) => {
    })
    .setFinishAction((level, context, areaManager, isWin) => {
        const area = context.area
        ClearEntityRemainInArea(level, area)
        CommonDungeonFinishAction(level, context, [Item.of('minecraft:diamond')], isWin)
    })
    .addWave(NewKillAmountWave(1, 20 * 5, (level, context, areaManager) => {
        const dungeonAttr = GetDungeonAttribute(context)
        for (let i = 0; i < 8; i++) {
            /**@type {Internal.PathfinderMob} */
            let entity = level.createEntity('minecraft:zombie')
            CommonDungeonEntityTierModifier(entity, dungeonAttr.getTier())
            ApplyCreateEntityModifier(level, context, areaManager, entity, dungeonAttr)
            DungeonCreateEntity(level, context, entity)
        }
    }))
    .addWave(NewKillAmountWave(1, 20 * 5, (level, context, areaManager) => {
        const dungeonAttr = GetDungeonAttribute(context)
        for (let i = 0; i < 8; i++) {
            /**@type {Internal.PathfinderMob} */
            let entity = level.createEntity('minecraft:zombie')
            CommonDungeonEntityTierModifier(entity, difficulty)
            ApplyCreateEntityModifier(level, context, areaManager, entity, dungeonAttr)
            DungeonCreateEntity(level, context, entity)
        }
    }))