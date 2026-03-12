// priority: 500
TetraJSEvents.registerStatBar(event => {
    event.registerEffectBar('kubejs:devour_blood')
        .setMin(0)
        .setMax(100)
        .setLabelGetter('percentagelabel')
        .setStatGetter(TetraJS$StatBarHelper.effectLevel('kubejs:devour_blood', 2.5, 0))
        .addOneDecimalTooltip(TetraJS$StatBarHelper.effectLevel('kubejs:devour_blood', 2.5, 0))
        .addOneDecimalTooltip(TetraJS$StatBarHelper.effectEfficiency('kubejs:devour_blood', 0.1, 0))
})