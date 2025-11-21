// priority: 1000
const CommonTransitionalItem = 'create:incomplete_precision_mechanism'
ServerEvents.recipes(event => {
    // event.recipes.create.sequenced_assembly(
    //     [
    //         Item.of("dirt").withChance(0.1),
    //         Item.of("oak_planks").withChance(0.9)
    //     ],
    //     'minecraft:oak_log',
    //     [
    //         create.deploying(incomplete, [incomplete, 'minecraft:grass_block']).keepHeldItem(),
    //         create.cutting(incomplete, incomplete),
    //         create.filling(incomplete, [incomplete, Fluid.water(1000)]),
    //         create.pressing(incomplete, incomplete)
    //     ]
    // )
    //     .transitionalItem(CommonTransitionalItem)
    //     .loops(3)
})

