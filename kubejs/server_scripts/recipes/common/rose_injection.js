// priority: 1000
AStages.addRestrictionForRecipe('rose/rose_injection_recipe', 'ftb_rose_injection_recipe', 'minecraft:crafting', 'kubejs:rose_injection_manual_only')

ServerEvents.recipes(event => {
    event.shaped('kubejs:rose_injection', [
        ['kubejs:rose_quartz_muscle', 'kubejs:rose_quartz_heart', 'kubejs:rose_quartz_rib'],
        ['candlelight:rose', 'kubejs:player_27_injection', 'candlelight:rose'],
        ['create:polished_rose_quartz', 'create:polished_rose_quartz', 'create:polished_rose_quartz']
    ]).id('kubejs:rose_injection_manual_only')
})