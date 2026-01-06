// priority: 1000
ServerEvents.recipes(event => {
    event.shapeless('biomancy:primordial_core', [
        'chestcavity:rotten_heart', 'chestcavity:animal_heart', 'chestcavity:heart'
    ])

    event.recipes.biomancy.bio_brewing(['minecraft:redstone', 'biomancy:genetic_compound', 'biomancy:decaying_additive', 'minecraft:glowstone_dust'], 'kubejs:jar_of_vacuum', 'kubejs:jar_of_mystery')
})
