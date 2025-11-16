ServerEvents.recipes(event => {
    const { tconstruct } = event.recipes
    //云纹（严寒插花术）
    tconstruct.material('kubejs:patterned', 'cryofloric_arts:patterned_ingot', 1, 1)
    tconstruct.material('kubejs:patterned', 'cryofloric_arts:patterned_block', 9, 1, 'cryofloric_arts:patterned_ingot')
    tconstruct.material_fluid('kubejs:patterned', Fluid.of('kubejs:melted_patterned', 90), 800)
    tconstruct.melting(Fluid.of('kubejs:melted_patterned', 90), Ingredient.of('cryofloric_arts:patterned_ingot'), 800, 100)
    tconstruct.melting(Fluid.of('kubejs:melted_patterned', 810), Ingredient.of('cryofloric_arts:patterned_block'), 800, 900)
    tconstruct.casting_table('cryofloric_arts:patterned_ingot', Fluid.of('kubejs:melted_patterned', 90), 47, Ingredient.of('#tconstruct:casts/multi_use/ingot'), false)
    tconstruct.casting_table('cryofloric_arts:patterned_ingot', Fluid.of('kubejs:melted_patterned', 90), 47, Ingredient.of('#tconstruct:casts/single_use/ingot'), true)
    tconstruct.casting_table('cataclysm:black_steel_nugget', Fluid.of('kubejs:melted_patterned', 10), 47, Ingredient.of('#tconstruct:casts/multi_use/nugget'), false)
    tconstruct.casting_table('cataclysm:black_steel_nugget', Fluid.of('kubejs:melted_patterned', 10), 47, Ingredient.of('#tconstruct:casts/single_use/nugget'), true)
    tconstruct.casting_basin('cryofloric_arts:patterned_block', Fluid.of('kubejs:melted_patterned', 810), 180)
})
