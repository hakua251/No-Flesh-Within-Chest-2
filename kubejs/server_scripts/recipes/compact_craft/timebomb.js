// priority: 1000
ServerEvents.recipes(event => {
    event.recipes.compactcrafting
        .miniaturization(
            [Item.of('infinity:timebomb', 1)],
            Item.of('kubejs:unstable_matter', 1),
            200
        ).setLayers([
            CCLayerType.MIXED.withPattern([
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', 'A', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '',],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
            ]),
            CCLayerType.MIXED.withPattern([
                ['', '', '', '', '', '', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', '', '', '', '', '', '',],
            ]),
            CCLayerType.MIXED.withPattern([
                ['', '', '', '', '', '', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'C', 'D', 'C', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', '', '', '', '', '', '',],
            ]),
            CCLayerType.MIXED.withPattern([
                ['', '', '', '', '', '', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'C', 'D', 'C', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', '', '', '', '', '', '',],
            ]),
            CCLayerType.MIXED.withPattern([
                ['', '', '', '', '', '', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'C', 'D', 'C', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', '', '', '', '', '', '',],
            ]),
            CCLayerType.MIXED.withPattern([
                ['', '', '', '', '', '', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'C', 'C', 'C', 'B', ''],
                ['', 'B', 'B', 'B', 'B', 'B', ''],
                ['', '', '', '', '', '', '',],
            ]),
            CCLayerType.MIXED.withPattern([
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
                ['A', 'A', 'A', 'A', 'A', 'A', 'A'],
            ]),
        ])
        .setComponents(new CCBlockComponent()
            .add('C', 'minecraft:purple_concrete')
            .add('D', 'ars_nouveau:source_gem_block')
            .add('A', 'minecraft:waxed_copper_block')
            .add('B', 'minecraft:purple_stained_glass')
            .build()
        )
})