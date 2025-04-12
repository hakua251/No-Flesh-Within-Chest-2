// priority: 999
const MoreHealthDungeonModifier = new DungeonModifierModel('more_health')
   .setCreateEntityAction((level, context, areaManager, entity, dungeonAttr) => {
        if (attributes.hasAttribute('minecraft:generic.max_health')) {
            entity.setAttributeBaseValue('minecraft:generic.max_health', Math.floor(entity.getAttribute('minecraft:generic.max_health').getValue() * 3))
            entity.setHealth(entity.getMaxHealth())
        }
   })