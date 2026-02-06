// priority: 1000
ServerEvents.recipes(event => {
    event.remove({ output: 'cataclysm:mechanical_fusion_anvil' })
    event.shaped('cataclysm:mechanical_fusion_anvil', [
        ['minecraft:redstone_block', 'minecraft:blackstone', 'minecraft:redstone_block'],
        ['cataclysm:witherite_ingot', 'minecraft:anvil', 'cataclysm:witherite_ingot'],
        ['minecraft:redstone_block', 'minecraft:blackstone', 'minecraft:redstone_block']
    ])
})