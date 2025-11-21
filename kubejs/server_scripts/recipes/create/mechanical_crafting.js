// priority: 1000
ServerEvents.recipes(event => {
    event.recipes.create.mechanical_crafting('kubejs:amethyst_resonator',
        [
            "GGG",
            "GAG",
            "PCP",
        ],
        {
            G: '#forge:glass',
            A: 'minecraft:amethyst_shard',
            P: '#minecraft:planks',
            C: '#forge:ingots/copper'
        }
    )
})

