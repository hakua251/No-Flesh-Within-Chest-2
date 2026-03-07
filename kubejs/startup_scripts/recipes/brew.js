// priority: 1000
MoreJSEvents.registerPotionBrewing(event => {
    event.addPotionBrewing('minecraft:prismarine_shard', 'minecraft:strength', 'minecraft:water_breathing')
    event.addPotionBrewing('minecraft:copper_ingot', 'minecraft:awkward', 'potioncore:lightning')
})