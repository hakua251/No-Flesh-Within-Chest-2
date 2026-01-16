// priority: 1000
ServerEvents.recipes(event => {
    const { tconstruct } = event.recipes

    tconstruct.melting(Fluid.of('kubejs:melted_rose_quartz', 100), Item.of('create:rose_quartz'), 800, 100)
    tconstruct.melting(Fluid.of('kubejs:melted_rose_quartz', 100), Item.of('create:polished_rose_quartz'), 800, 100)

    tconstruct.melting(Fluid.of('kubejs:melted_rose_quartz', 100), Item.of('create:electron_tube'), 800, 200, [Fluid.of('tconstruct:molten_iron', 90)])
    tconstruct.melting(Fluid.of('kubejs:melted_rose_quartz', 100), Item.of('create:rose_quartz_lamp'), 800, 200, [Fluid.of('tconstruct:molten_zinc', 90)])

    tconstruct.casting_table('create:polished_rose_quartz', Fluid.of('kubejs:melted_rose_quartz', 100), 40, Ingredient.of('#tconstruct:casts/multi_use/gem'), false)
    tconstruct.casting_table('create:polished_rose_quartz', Fluid.of('kubejs:melted_rose_quartz', 100), 40, Ingredient.of('#tconstruct:casts/single_use/gem'), true)
})