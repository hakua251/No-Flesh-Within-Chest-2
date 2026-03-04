// priority: 1000
StartupEvents.registry('item', event => {
    event.create('clear_crystal').texture('kubejs:item/materials/clear_crystal').maxStackSize(64).fireResistant()
    event.create('genesis_tinker_blueprint').texture('kubejs:item/materials/genesis_tinker_blueprint').maxStackSize(1).fireResistant()
})

