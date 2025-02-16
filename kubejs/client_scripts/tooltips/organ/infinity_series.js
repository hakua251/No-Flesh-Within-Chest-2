// priority: 900
RegisteryOrganTooltip(new MultiStateTooltip('kubejs:infinity_beats')
    .addDefault(Text.translatable('tooltips.kubejs.infinity_beats.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.infinity_beats.alt.1', Text.gold('4')))
    .addAlt(Text.translatable('tooltips.kubejs.infinity_beats.alt.2'))
    .addAlt(Text.translatable('tooltips.kubejs.infinity_beats.alt.3')))

RegisteryOrganTooltip(new MultiStateTooltip('kubejs:infinity_force')
    .addDefault(Text.translatable('tooltips.kubejs.infinity_force.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.infinity_force.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.infinity_force.alt.2'))
    .addAlt(Text.translatable('tooltips.kubejs.infinity_force.alt.3'))
    .addAlt(Text.translatable('tooltips.kubejs.infinity_force.alt.4')))

ItemEvents.tooltip(tooltip => {
    tooltip.addAdvanced('kubejs:infinity_force', (item, advanced, text) => {
        text.set(0, [text.get(0), Text.yellow(` +${item.nbt?.forgeTimes ? item.nbt.forgeTimes : 0}`)])
    })
})
