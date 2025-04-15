// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:king_of_stomach').maxStackSize(1).texture('kubejs:item/organs/food/king_of_stomach').tag('kubejs:stomach')

    event.create('kubejs:sweets_gland').maxStackSize(1).texture('kubejs:item/organs/food/sweets_gland').tag('kubejs:food')

    event.create('kubejs:beer_gland').maxStackSize(1).texture('kubejs:item/organs/food/beer_gland').tag('kubejs:food')
})