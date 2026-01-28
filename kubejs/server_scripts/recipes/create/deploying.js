// priority: 1000
ServerEvents.recipes(event => {
    event.recipes.create.deploying(['kubejs:world_computer'], ['create:brass_block', 'kubejs:reverse_causality_chip'])
    event.recipes.create.deploying(['kubejs:telescopic_attack_arm'], ['kubejs:telescopic_arm', 'minecraft:gunpowder'])
    event.recipes.create.deploying(['kubejs:telescopic_arm'], ['create:brass_hand', 'create:iron_sheet'])
})
