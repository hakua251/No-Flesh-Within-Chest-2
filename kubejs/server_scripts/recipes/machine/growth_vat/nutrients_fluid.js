// priority: 1000
ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        [Fluid.of('kubejs:nutrients_fluid', 250)],
        [Item.of('biomancy:nutrient_paste', 4), Fluid.of('minecraft:water', 250)], 20 * 15).heated()
    event.recipes.create.mixing(
        [Fluid.of('kubejs:nutrients_fluid', 1000)],
        [Item.of('biomancy:nutrient_paste', 4), Fluid.of('create:honey', 250)], 20 * 8).heated()


    event.recipes.create.mixing(
        [Fluid.of('kubejs:rotten_nutrients_fluid', 250)],
        [Item.of('minecraft:rotten_flesh', 8), Fluid.of('minecraft:water', 250)], 20 * 15).heated()
    event.recipes.create.mixing(
        [Fluid.of('kubejs:rotten_nutrients_fluid', 1000)],
        [Item.of('minecraft:rotten_flesh', 4), Fluid.of('create:honey', 250)], 20 * 8).heated()

    event.recipes.create.mixing(
        [Fluid.of('kubejs:rose_nutrients_fluid', 250)],
        [Item.of('create:rose_quartz', 4), Fluid.of('minecraft:water', 250)], 20 * 15).superheated()
    event.recipes.create.mixing(
        [Fluid.of('kubejs:rose_nutrients_fluid', 250)],
        [Item.of('create:polished_rose_quartz', 4), Fluid.of('minecraft:water', 250)], 20 * 15).superheated()
    event.recipes.create.mixing(
        [Fluid.of('kubejs:rose_nutrients_fluid', 1000)],
        [Item.of('create:rose_quartz', 4), Fluid.of('create:honey', 250)], 20 * 8).superheated()
    event.recipes.create.mixing(
        [Fluid.of('kubejs:rose_nutrients_fluid', 1000)],
        [Item.of('create:polished_rose_quartz', 4), Fluid.of('create:honey', 250)], 20 * 8).superheated()
})