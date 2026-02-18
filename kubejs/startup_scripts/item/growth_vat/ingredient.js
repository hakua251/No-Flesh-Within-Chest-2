// priority: 1000
StartupEvents.registry('item', event => {
    event.create('simple_culture_medium').maxStackSize(1).texture('kubejs:item/materials/simple_culture_medium')

    event.create('culture_medium').maxStackSize(1).texture('kubejs:item/materials/culture_medium')
})