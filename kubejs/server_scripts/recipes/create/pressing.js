// priority: 1000
ServerEvents.recipes(event => {
    event.recipes.create.pressing(Item.of('kubejs:colorful_singularity').withChance(0.01), 'kubejs:colorful_dye')
})
