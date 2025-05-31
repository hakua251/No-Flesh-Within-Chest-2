// priority: 500
StartupEvents.registry('irons_spellbooks:schools', event => {
    event.create('candy')
        .setName(Text.of('school.kubejs.candy').color('#fcc2e4'))
        .setFocus('kubejs:candy_focus')
        .setPowerAttribute('kubejs:candy_spell_power')
        .setResistanceAttribute('kubejs:candy_spell_resistance')
        .setDefaultCastSound('irons_spellbooks:cast.generic.holy')
})