// priority: 999
const MoreHealthDungeonModifierUUID1 = UUID.fromString('60421FE0-4259-4EC4-844A-383BF88CC4F4')
new DungeonModifierModel('more_health_1')
    .setCreateEntityAction((customData, level, context, areaManager, entity, dungeonAttr) => {
        let healthAttribute = entity.getAttribute('minecraft:generic.max_health')
        if (!healthAttribute) return
        let attributeModifier = new $AttributeModifier(MoreHealthDungeonModifierUUID1, 'MoreHealthDungeonModifier1', 0.5, $Operation.ADDITION)
        healthAttribute.addPermanentModifier(attributeModifier)
    })
    .registry()

const MoreHealthDungeonModifierUUID2 = UUID.fromString('18783E7F-C8D3-490E-91C9-A761EB95E651')
new DungeonModifierModel('more_health_2')
    .setCreateEntityAction((customData, level, context, areaManager, entity, dungeonAttr) => {
        let healthAttribute = entity.getAttribute('minecraft:generic.max_health')
        if (!healthAttribute) return
        let attributeModifier = new $AttributeModifier(MoreHealthDungeonModifierUUID2, 'MoreHealthDungeonModifier2', 0.5, $Operation.ADDITION)
        healthAttribute.addPermanentModifier(attributeModifier)
    })
    .registry()

const MoreHealthDungeonModifierUUID3 = UUID.fromString('0A3BABF6-2724-438A-B116-3A7E589086BA')
new DungeonModifierModel('more_health_3')
    .setCreateEntityAction((customData, level, context, areaManager, entity, dungeonAttr) => {
        let healthAttribute = entity.getAttribute('minecraft:generic.max_health')
        if (!healthAttribute) return
        let attributeModifier = new $AttributeModifier(MoreHealthDungeonModifierUUID3, 'MoreHealthDungeonModifier3', 1, $Operation.ADDITION)
        healthAttribute.addPermanentModifier(attributeModifier)
    })
    .registry()

const MoreHealthDungeonModifierUUID4 = UUID.fromString('2A801D1A-0ABA-4B16-9508-E76E207398B9')
new DungeonModifierModel('more_health_4')
    .setCreateEntityAction((customData, level, context, areaManager, entity, dungeonAttr) => {
        let healthAttribute = entity.getAttribute('minecraft:generic.max_health')
        if (!healthAttribute) return
        let attributeModifier = new $AttributeModifier(MoreHealthDungeonModifierUUID4, 'MoreHealthDungeonModifier4', 3, $Operation.ADDITION)
        healthAttribute.addPermanentModifier(attributeModifier)
    })
    .registry()

const MoreHealthDungeonModifierUUID5 = UUID.fromString('D402C12A-521D-4C8B-B7AD-2AADEF0151BE')
new DungeonModifierModel('more_health_5')
    .setCreateEntityAction((customData, level, context, areaManager, entity, dungeonAttr) => {
        let healthAttribute = entity.getAttribute('minecraft:generic.max_health')
        if (!healthAttribute) return
        let attributeModifier = new $AttributeModifier(MoreHealthDungeonModifierUUID5, 'MoreHealthDungeonModifier4', 5, $Operation.ADDITION)
        healthAttribute.addPermanentModifier(attributeModifier)
    })
    .registry()