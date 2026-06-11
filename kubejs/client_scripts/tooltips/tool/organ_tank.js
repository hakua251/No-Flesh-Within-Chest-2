// priority: 500
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:organ_purification_tank')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.organ_purification_tank.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.organ_purification_tank.shift.1'))
)

ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:organ_bundle')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.organ_bundle.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.organ_bundle.shift.1'))
)
