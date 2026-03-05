// priority: 500
JEIAddedEvents.registerCategories((event) => {
    event.custom('kubejs:lightning_channeling', (category) => {
        const guiHelper = category.jeiHelpers.guiHelper
        category.title(Text.translatable('jei.category.kubejs.lightning_channeling.name'))
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))
        category.icon(guiHelper.createDrawableItemStack(Item.of('minecraft:lightning_rod')))
        category.isRecipeHandled((recipe) => true)
        category.handleLookup((builder, recipe, focuses) => {
            let data = recipe.data
            for (let index = 0; index < 9; index++) {
                let pBuilder = builder.addSlot('input', 10 + index % 3 * 18, 11 + Math.floor(index / 3) * 18)
                    .setSlotName(`input_${index}`)
                    .setBackground(guiHelper.getSlotDrawable(), -1, -1)
                if (index < data.oriItems.length) {
                    pBuilder.addItemStack(data.oriItems[index])
                }
            }

            for (let index = 0; index < 9; index++) {
                let pBuilder = builder.addSlot('output', 117 + index % 3 * 18, 11 + Math.floor(index / 3) * 18)
                    .setSlotName(`output_${index}`)
                    .setBackground(guiHelper.getSlotDrawable(), -1, -1)
                if (index < data.outputItems.length) {
                    pBuilder.addItemStack(data.outputItems[index])
                }
            }
        })
        category.setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
            $AllGuiTextures.JEI_ARROW.render(guiGraphics, 68, 32)
        })
    })
})

JEIAddedEvents.registerRecipes(event => {
    function registryLightningChannelingRecipe(oriItems, outputItems) {
        event.custom('kubejs:lightning_channeling').add({
            outputItems: outputItems,
            oriItems: oriItems,
        })
    }
    registryLightningChannelingRecipe([Item.of('tetra:thermal_cell', '{Damage:128}')], [Item.of('tetra:thermal_cell')])
    registryLightningChannelingRecipe([Item.of('minecraft:amethyst_shard'), Item.of('create:brass_ingot')], [Item.of('kubejs:unstable_matter')])
})