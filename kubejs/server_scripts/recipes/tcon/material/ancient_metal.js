// priority: 1000
ServerEvents.recipes(event => {
    const { tconstruct } = event.recipes
    //远古金属（灾变）
    tconstruct.material('kubejs:ancient_metal', 'cataclysm:ancient_metal_ingot', 1, 1)
    tconstruct.material('kubejs:ancient_metal', 'cataclysm:ancient_metal_block', 9, 1, 'cataclysm:ancient_metal_ingot')
    tconstruct.material_fluid('kubejs:ancient_metal', Fluid.of('kubejs:melted_ancient_metal', 90), 800)
    tconstruct.melting(Fluid.of('kubejs:melted_ancient_metal', 90), Ingredient.of('cataclysm:ancient_metal_ingot'), 800, 100)
    tconstruct.melting(Fluid.of('kubejs:melted_ancient_metal', 810), Ingredient.of('cataclysm:ancient_metal_block'), 800, 900)
    tconstruct.casting_table('cataclysm:ancient_metal_ingot', Fluid.of('kubejs:melted_ancient_metal', 90), 47, Ingredient.of('#tconstruct:casts/multi_use/ingot'), false)
    tconstruct.casting_table('cataclysm:ancient_metal_ingot', Fluid.of('kubejs:melted_ancient_metal', 90), 47, Ingredient.of('#tconsstruct:casts/single_use/ingot'), true)
    tconstruct.casting_table('cataclysm:ancient_metal_nugget', Fluid.of('kubejs:melted_ancient_metal', 10), 47, Ingredient.of('#tconstruct:casts/multi_use/nugget'), false)
    tconstruct.casting_table('cataclysm:ancient_metal_nugget', Fluid.of('kubejs:melted_ancient_metal', 10), 47, Ingredient.of('#tconstruct:casts/single_use/nugget'), true)
    tconstruct.casting_basin('cataclysm:ancient_metal_block', Fluid.of('kubejs:melted_ancient_metal', 810), 180)
})
