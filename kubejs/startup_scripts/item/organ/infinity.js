// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:infinity_beats').maxStackSize(1).texture('kubejs:item/organs/infinity/infinity_beats').tag('kubejs:infinity')
    event.create('kubejs:infinity_force').maxStackSize(1).texture('kubejs:item/organs/infinity/infinity_force').tag('kubejs:infinity')
})
