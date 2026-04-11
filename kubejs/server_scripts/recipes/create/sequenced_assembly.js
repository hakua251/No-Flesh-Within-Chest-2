// priority: 1000
const CommonTransitionalItem = 'create:incomplete_precision_mechanism'
ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:redstone_capacitor')
        ],
        'minecraft:resin_brick',
        [
            event.recipes.create.pressing(CommonTransitionalItem, CommonTransitionalItem),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, '#forge:dusts/redstone']),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, '#forge:dusts/glowstone']),
            event.recipes.create.cutting(CommonTransitionalItem, CommonTransitionalItem),
        ]
    )
        .transitionalItem(CommonTransitionalItem)
        .loops(3)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:stable_substrate')
        ],
        'minecraft:slime_ball',
        [
            event.recipes.create.pressing(CommonTransitionalItem, CommonTransitionalItem),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, 'minecraft:resin_brick']),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, 'minecraft:slime_ball']),
            event.recipes.create.pressing(CommonTransitionalItem, CommonTransitionalItem),
        ]
    )
        .transitionalItem(CommonTransitionalItem)
        .loops(3)


    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:random_tick_spring').withChance(0.1),
            Item.of('kubejs:refined_brass_ingot').withChance(0.9),
        ],
        'kubejs:refined_brass_ingot',
        [
            event.recipes.create.pressing(CommonTransitionalItem, CommonTransitionalItem),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, '#forge:gems/amethyst']),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, '#forge:ingots/iron']),
            event.recipes.create.filling(CommonTransitionalItem, [CommonTransitionalItem, Fluid.of('createdieselgenerators:diesel', 25)]),
        ]
    )
        .transitionalItem(CommonTransitionalItem)
        .loops(3)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:structural_bolt')
        ],
        'minecraft:crying_obsidian',
        [
            event.recipes.create.pressing(CommonTransitionalItem, CommonTransitionalItem),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, 'create:brass_ingot']),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, 'minecraft:glass']),
            event.recipes.create.cutting(CommonTransitionalItem, CommonTransitionalItem),
        ]
    )
        .transitionalItem(CommonTransitionalItem)
        .loops(3)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:oracle_gate')
        ],
        'kubejs:stable_substrate',
        [
            event.recipes.create.pressing(CommonTransitionalItem, CommonTransitionalItem),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, 'create_connected:control_chip']),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, '#forge:ingots/brass']),
            event.recipes.create.filling(CommonTransitionalItem, [CommonTransitionalItem, Fluid.of('create:potion', 25, { Bottle: "REGULAR", Potion: "minecraft:fire_resistance" })]),
        ]
    )
        .transitionalItem(CommonTransitionalItem)
        .loops(16)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:simulated_unit')
        ],
        'kubejs:redstone_capacitor',
        [
            event.recipes.create.pressing(CommonTransitionalItem, CommonTransitionalItem),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, 'minecraft:sea_lantern']),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, '#forge:ingots/brass']),
            event.recipes.create.cutting(CommonTransitionalItem, CommonTransitionalItem),
        ]
    )
        .transitionalItem(CommonTransitionalItem)
        .loops(3)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:furnace_core')
        ],
        'kubejs:inner_furnace',
        [
            event.recipes.create.pressing(CommonTransitionalItem, CommonTransitionalItem),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, 'kubejs:flame_crystal']),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, '#forge:ingots/brass']),
            event.recipes.create.filling(CommonTransitionalItem, [CommonTransitionalItem, Fluid.of('minecraft:lava', 1000)]),
        ]
    )
        .transitionalItem(CommonTransitionalItem)
        .loops(3)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:revolution_reinforcement')
        ],
        'minecraft:magma_cream',
        [
            event.recipes.create.pressing(CommonTransitionalItem, CommonTransitionalItem),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, 'create:iron_sheet']),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, 'minecraft:redstone_torch']),
            event.recipes.create.deploying(CommonTransitionalItem, [CommonTransitionalItem, '#forge:ingots/brass']),
        ]
    )
        .transitionalItem(CommonTransitionalItem)
        .loops(5)
})

