// priority: 1000
const DungeonEntityModifierStrategy = new StrategyModel()
const DungeonLootModifierStrategy = new StrategyModel()
const DungeonStructModifierStrategy = new StrategyModel()


/**
 * 
 * @param {DungeonModifierModel} modifier 
 */
function RegisterDungeonModifier(modifier) {
    if (modifier.createEntityModifier) {
        DungeonEntityModifierStrategy.register(modifier.id, modifier.createEntityModifier)
    }
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
        DungeonEntityModifierStrategy.run(dungeonAttr.modifierList, [level, context, areaManager, entity, dungeonAttr], {})
    }
}