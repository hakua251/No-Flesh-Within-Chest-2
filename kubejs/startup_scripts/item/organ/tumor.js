// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:worm_neuron')
        .maxStackSize(1)
        .texture('kubejs:item/organs/infected/worm_neuron')
        .tag('kubejs:infected')

    event.create('kubejs:tumor')
        .texture('kubejs:item/organs/infected/tumor')
        .maxStackSize(1)
        .tag('kubejs:organ')
        .tag('kubejs:infected')

    event.create('kubejs:unformed_tumor')
        .texture('kubejs:item/organs/infected/unformed_tumor')
        .maxStackSize(1)
        .tag('kubejs:organ')
        .tag('kubejs:infected')
})