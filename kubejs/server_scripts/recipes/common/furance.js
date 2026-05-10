// priority: 1000
ServerEvents.recipes(event => {
    event.smelting('kubejs:simple_cooked_taste_worm', 'kubejs:worm_of_taste', '0.1')
    event.smelting('kubejs:inner_furnace', Item.of('minecraft:iron_nugget', 3), '0.1')
    event.smelting('kubejs:golem_cable', Item.of('minecraft:iron_nugget', 6), '0.1')
    event.smelting('kubejs:golem_plating', Item.of('minecraft:iron_nugget', 6), '0.1')
    event.smelting('kubejs:piston_muscle', Item.of('minecraft:iron_nugget', 1), '0.1')
    event.smelting('kubejs:iron_repair_device', Item.of('minecraft:iron_ingot'), '0.1')
    event.smelting('kubejs:fiery_core', Item.of('minecraft:magma_block'), '0.1')
    event.smelting('kubejs:energy_bottle_red', Item.of('minecraft:red_dye'), '0.1')
})