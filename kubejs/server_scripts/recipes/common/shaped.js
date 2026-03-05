// priority: 1000
ServerEvents.recipes(event => {
    event.remove({ output: 'cataclysm:mechanical_fusion_anvil' })
    event.shaped('cataclysm:mechanical_fusion_anvil', [
        ['minecraft:redstone_block', 'minecraft:blackstone', 'minecraft:redstone_block'],
        ['cataclysm:witherite_ingot', 'minecraft:anvil', 'cataclysm:witherite_ingot'],
        ['minecraft:redstone_block', 'minecraft:blackstone', 'minecraft:redstone_block']
    ])
    event.remove({ id: 'mbtool:mbtool' })
    event.shaped('mbtool:mbtool', [
        ['minecraft:copper_ingot', 'supplementaries:cannon', 'minecraft:copper_ingot'],
        ['minecraft:copper_ingot', 'minecraft:anvil', 'minecraft:copper_ingot'],
        ['minecraft:copper_ingot', 'minecraft:book', 'minecraft:copper_ingot']
    ])
    event.remove({ id: 'tetravsikt:thermal_cell' })
    event.shaped(Item.of('tetra:thermal_cell', '{Damage:128}'), [
        ['', 'tetra:metal_scrap', 'tetra:metal_scrap'],
        ['tetra:metal_scrap', 'minecraft:copper_ingot', 'tetra:metal_scrap'],
        ['tetra:metal_scrap', 'tetra:metal_scrap', '']
    ])
})

