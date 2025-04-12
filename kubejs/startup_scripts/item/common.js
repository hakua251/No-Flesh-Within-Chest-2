// priority: 1000
StartupEvents.registry('item', event => {
    event.create('dungeon_key').maxStackSize(1).texture('kubejs:item/dungeon_key')
    event.create('chestcavity_injection').maxStackSize(1).texture('kubejs:item/chestcavity_injection')
})