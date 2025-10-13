ServerEvents.recipes(event => {
    const { tconstruct } = event.recipes
    //腾炎（灾变）
    tconstruct.material('kubejs:ignitium', 'cataclysm:ignitium_ingot', 1, 1)
    tconstruct.material('kubejs:ignitium', 'cataclysm:ignitium_block', 9, 1, 'cataclysm:ignitium_ingot')
    tconstruct.material_fluid('kubejs:ignitium', Fluid.of('kubejs:melted_ignitium', 90), 800)
    tconstruct.melting(Fluid.of('kubejs:melted_ignitium', 90), Ingredient.of('cataclysm:ignitium_ingot'), 800, 100)
    tconstruct.melting(Fluid.of('kubejs:melted_ignitium', 810), Ingredient.of('cataclysm:ignitium_block'), 800, 900)
    tconstruct.casting_table('cataclysm:ignitium_ingot', Fluid.of('kubejs:melted_ignitium', 90), 47, Ingredient.of('#tconstruct:casts/multi_use/ingot'), false)
    tconstruct.casting_table('cataclysm:ignitium_ingot', Fluid.of('kubejs:melted_ignitium', 90), 47, Ingredient.of('#tconstruct:casts/single_use/ingot'), true)
    tconstruct.casting_basin('cataclysm:ignitium_block', Fluid.of('kubejs:melted_ignitium', 810), 180)
})
