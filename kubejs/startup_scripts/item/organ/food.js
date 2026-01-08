// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:king_of_stomach').maxStackSize(1).texture('kubejs:item/organs/food/king_of_stomach').tag('kubejs:stomach')

    event.create('kubejs:sweets_gland').food(food => {
        food.hunger(2).saturation(1)
        food.alwaysEdible()
    }).maxStackSize(1).texture('kubejs:item/organs/food/sweets_gland').tag('kubejs:food')

    event.create('kubejs:beer_gland').food(food => {
        food.hunger(2).saturation(1)
        food.alwaysEdible()
    }).maxStackSize(1).texture('kubejs:item/organs/food/beer_gland').tag('kubejs:food')

    event.create('kubejs:parasitism_stomach').maxStackSize(1).texture('kubejs:item/organs/food/parasitism_stomach').tag('kubejs:food')

    event.create('kubejs:greedy_throat').maxStackSize(1).texture('kubejs:item/organs/food/greedy_throat').tag('kubejs:food')

    event.create('kubejs:worm_larva').maxStackSize(1).maxDamage(100).texture('kubejs:item/organs/food/worm_larva').tag('kubejs:food')

    event.create('kubejs:jar_of_vacuum').maxStackSize(1).texture('kubejs:item/organs/food/jar_of_vacuum')

    event.create('kubejs:jar_of_mystery').maxStackSize(1).maxDamage(10).texture('kubejs:item/organs/food/jar_of_mystery')

    event.create('kubejs:worm_of_taste').maxStackSize(1).food(food => food.hunger(1).saturation(1).effect('minecraft:nausea', 200)).texture('kubejs:item/organs/food/worm_of_taste').tag('kubejs:food').tag('kubejs:infected')

    event.create('kubejs:dried_taste_worm').maxStackSize(1).food(food => food.hunger(1).saturation(1)).texture('kubejs:item/organs/food/dried_taste_worm').tag('kubejs:food')

    event.create('kubejs:simple_prepared_taste_worm').maxStackSize(1).food(food => food.hunger(2).saturation(0.5)).texture('kubejs:item/organs/food/simple_prepared_taste_worm').tag('kubejs:food')

    event.create('kubejs:taste_worm_powder').maxStackSize(1).food(food => food.hunger(1).saturation(1)).texture('kubejs:item/organs/food/taste_worm_powder').tag('kubejs:food')

    event.create('kubejs:taste_worm_meat_filling').maxStackSize(1).food(food => food.hunger(1).saturation(2)).texture('kubejs:item/organs/food/taste_worm_meat_filling').tag('kubejs:food')
})