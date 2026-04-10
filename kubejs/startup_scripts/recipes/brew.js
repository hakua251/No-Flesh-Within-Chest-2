// priority: 1000
MoreJSEvents.registerPotionBrewing(event => {
    event.addPotionBrewing('minecraft:prismarine_shard', 'minecraft:strength', 'minecraft:water_breathing')
    event.addPotionBrewing('minecraft:copper_ingot', 'minecraft:awkward', 'potioncore:lightning')

    // event.addPotionBrewing('minecraft:armadillo_scute', 'biomancy:primordial_infestation', 'chestcavity:organ_slip')
    // event.addPotionBrewing('minecraft:redstone', 'chestcavity:organ_slip', 'chestcavity:long_organ_slip')
    // StartupEvents.registry('potion', event => {
    //     event.createCustom('organ_slip', () => new $PotionBuilder('organ_slip').effect('kubejs:organ_slip', 400, 0).createObject())
    //     event.createCustom('long_organ_slip', () => new $PotionBuilder('long_organ_slip').effect('kubejs:organ_slip', 1600, 0).createObject())
    // })
})