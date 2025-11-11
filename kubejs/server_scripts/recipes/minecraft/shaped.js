// priority: 1000
AStages.addRestrictionForRecipe('tcon/genesis_blueprint_recipe', 'genesis_tinker_2', 'minecraft:crafting', 'kubejs:genesis_tinker_blueprint_manual_only')

ServerEvents.recipes(event => {
    event.shaped('kubejs:genesis_tinker_blueprint', [
        ['minecraft:experience_bottle', 'kubejs:clear_crystal', 'minecraft:experience_bottle'],
        ['minecraft:nether_star', 'lightmanscurrency:coin_emerald', 'minecraft:nether_star'],
        ['minecraft:experience_bottle', 'tconstruct:dragon_scale', 'minecraft:experience_bottle']
    ]).id('kubejs:genesis_tinker_blueprint_manual_only')

    // AStages.addRestrictionForItem('tcon/gensis_blueprint', 'genesis_tinker_2', 'kubejs:genesis_tinker_blueprint')
    //     .setHideInJEI(true)
    //     .setCanPickedUp(true)
    //     .setCanAttack(true)
    //     .setCanBeStoredInInventory(true)
    //     .setCanBeStoredInContainers(true)
    //     .setCanBeEquipped(true)
    //     .setCanPickedUp(true)
    //     .setCanItemBeLeftClicked(true)
    //     .setCanItemBeRightClicked(true)
    //     .setCanInteractWithBlock(true)
    //     .setRenderItemName(true)
})