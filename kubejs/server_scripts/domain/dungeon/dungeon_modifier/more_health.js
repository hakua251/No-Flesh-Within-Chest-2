// priority: 999
new DungeonModifierModel('more_health')
    .setCreateEntityAction((customData, level, context, areaManager, entity, dungeonAttr) => {
        const attributes = entity.getAttributes()
        if (attributes.hasAttribute('minecraft:generic.max_health')) {
            entity.setAttributeBaseValue('minecraft:generic.max_health', Math.floor(entity.getAttribute('minecraft:generic.max_health').getValue() * 2))
            entity.setHealth(entity.getMaxHealth())
        }
    })
    .registry()