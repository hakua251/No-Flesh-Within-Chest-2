// priority: 1000
ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        [Fluid.of('kubejs:nutrients_fluid', 250)],
        [Item.of('biomancy:nutrient_paste', 4), Fluid.of('minecraft:water', 250)], 20 * 15).heated()

    event.recipes.create.mixing(
        [Fluid.of('kubejs:nutrients_fluid', 1000)],
        [Item.of('biomancy:nutrient_paste', 4), Fluid.of('create:honey', 250)], 20 * 8).heated()

    event.recipes.tconstruct.melting(Fluid.of('kubejs:nutrients_fluid', 50), Item.of('biomancy:nutrient_paste'), 600, 600)
    event.recipes.tconstruct.melting(Fluid.of('kubejs:nutrients_fluid', 450), Item.of('biomancy:nutrient_bar'), 800, 1800)
    event.recipes.tconstruct.casting_table('biomancy:nutrient_paste', Fluid.of('kubejs:nutrients_fluid', 50), 47)
})