// priority: 1000
StartupEvents.registry('sound_event', event => {
    event.create('kubejs:faded')
    event.create('kubejs:assumptions')
})

StartupEvents.registry('item', event => {
    event.create('kubejs:faded_disc', 'music_disc')
        .song('kubejs:faded', 99)
        .analogOutput(1)
        .texture('kubejs:item/materials/faded_disc')
        .displayName('Music Disc: Faded')
        .maxStackSize(1)
    event.create('kubejs:assumptions_disc', 'music_disc')
        .song('kubejs:assumptions', 220)
        .analogOutput(1)
        .texture('kubejs:item/materials/assumptions_disc')
        .displayName('Music Disc: Assumptions')
        .maxStackSize(1)
})