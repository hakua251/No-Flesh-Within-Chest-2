// priority: 500
ApplyMultiStateTooltip(new MultiStateTooltip('kubejs:experience_injection')
    .setShiftDescription(Text.translatable('tooltips.kubejs.tool.shift.1'))
    .setShiftHoldingDescription(Text.translatable('tooltips.kubejs.tool.shift_holding.1'))
    .setAltDescription(Text.translatable('tooltips.kubejs.tool.alt.1'))
    .setAltHoldingDescription(Text.translatable('tooltips.kubejs.tool.alt_holding.1'))
    .addDefault(Text.translatable('tooltips.kubejs.experience_injection.default.1').gray())
    .addShift(Text.translatable('tooltips.kubejs.experience_injection.shift.1'))
    .addShift(Text.translatable('tooltips.kubejs.experience_injection.shift.2'))
    .addAlt((text, item) => {
        let nbt = item.getOrCreateTag()
        let expValue = nbt.getInt('value')
        return [Text.translatable('tooltips.kubejs.experience_injection.alt.1', Text.yellow(expValue.toFixed(0)))]
    })
)