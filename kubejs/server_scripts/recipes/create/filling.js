// priority: 1000
ServerEvents.recipes(event => {
    event.recipes.create.filling([Item.of('tetra:thermal_cell', 1)], [Item.of('tetra:thermal_cell', '{Damage:128}').weakNBT(), Fluid.of('minecraft:lava', 1000)])
})