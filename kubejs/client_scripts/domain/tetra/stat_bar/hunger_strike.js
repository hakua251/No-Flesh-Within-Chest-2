// priority: 500
TetraJSEvents.registerStatBar(event => {
    event.registerEffectBar('kubejs:hunger_strike')
        .setMin(0)
        .setMax(500)
        .setLabelGetter('percentagelabel')
        .setStatGetter(TetraJS$StatBarHelper.effectEfficiency('kubejs:hunger_strike', 10, 0))
        .addIntegerTooltip(TetraJS$StatBarHelper.effectLevel('kubejs:hunger_strike', 1, 0))
        .addIntegerTooltip(TetraJS$StatBarHelper.effectEfficiency('kubejs:hunger_strike', 10, 0))
})