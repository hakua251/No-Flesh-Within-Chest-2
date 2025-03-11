// priority: 900
RegisteryOrganTooltip(new MultiStateTooltip('kubejs:furnace_core')
    .addDefault(Text.translatable('tooltips.kubejs.furnace_core.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.furnace_core.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.furnace_core.alt.2', Text.gold('2'), Text.gold('5')))
    .addAlt(Text.translatable('tooltips.kubejs.furnace_core.alt.3'))
    .addCtrl(EternalFlameSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.furnace_core.ctrl.1'))
)


RegisteryOrganTooltip(new MultiStateTooltip('kubejs:burning_heart')
    .addDefault(Text.translatable('tooltips.kubejs.burning_heart.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.burning_heart.alt.1', Text.gold('5')))
    .addAlt(Text.translatable('tooltips.kubejs.burning_heart.alt.2', Text.gold('200')))
    .addAlt(Text.translatable('tooltips.kubejs.burning_heart.alt.3'))
    .addCtrl(EternalFlameSlotType)
    .addCtrl(Text.translatable('tooltips.kubejs.burning_heart.ctrl.1'))
)