// priority: 900
RegisteryOrganTooltip(new MultiStateTooltip('kubejs:originiums')
    .addDefault(Text.translatable('tooltips.kubejs.originiums.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.originiums.alt.1'))
    .addAlt(Text.translatable('tooltips.kubejs.originiums.alt.2', Text.gold('10'), Text.gold('3')))
    .addAlt(Text.translatable('tooltips.kubejs.originiums.alt.3'))
    .addMPMType(OrganItemMPMTypeNotShow, OrganItemMPMTypeNotShowText)
    .addMPMType(OrganItemMPMTypeShow, OrganItemMPMTypeShowText)
)

RegisteryOrganTooltip(new MultiStateTooltip('kubejs:harvest_rune_bone')
    .addDefault(Text.translatable('tooltips.kubejs.harvest_rune_bone.default.1').gray())
    .addAlt(Text.translatable('tooltips.kubejs.harvest_rune_bone.alt.1'))
)