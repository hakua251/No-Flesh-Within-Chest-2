// priority: 500

TetraJSEvents.registerStatBar(event => {
    event.registerEffectBar('kubejs:burns')
        .setMin(0)
        .setMax(100)
        .setLabelGetter('percentagelabel')
        .addOneDecimalTooltip(TetraJS$StatBarHelper.effectLevel('kubejs:burns', 10.0))
})

