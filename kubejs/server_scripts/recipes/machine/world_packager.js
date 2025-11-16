// priority: 500
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine('kubejs:world_packager', 1200)
        .requireStructure([
            [
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "BBBBBBBBBBB",
                "     m     "
            ],
            [
                "           ",
                " GGGG GGGG ",
                " GIII IIIG ",
                " GII IIIIG ",
                " GI I I IG ",
                "   G I G   ",
                " GI I I IG ",
                " GII IIIIG ",
                " GIII IIIG ",
                " GGGG GGGG ",
                "           ",
                "           "
            ]
        ],
            {
                "B": "minecraft:black_terracotta",
                "G": "minecraft:gold_block",
                "I": "minecraft:iron_block",
            }
        )
        .requireRedstone('[1,)')
        .resetOnError()
})

