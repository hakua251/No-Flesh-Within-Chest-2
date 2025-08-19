// priority: 800
ItemEvents.tooltip(tooltip => {
    tooltip.addAdvanced('kubejs:glass_vial', (item, advanced, text) => {
        if (!item.hasNBT() || !item.getNbt().contains('organScores')) return
        let lineNum = 1
        if (tooltip.isShift()) {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.glass_vial.2`)], lineNum)
            let scoreTooltipsList = []
            item.nbt.organScores.getAllKeys().forEach(key => {
                let roundValue = FloorFix(item.nbt.organScores[key], 2)
                let scoreString = Text.translate(`tooltips.kubejs.score_tag.${key}`).getString()
                let scoreTooltips = Text.translatable('tooltips.kubejs.glass_vial.3', Text.yellow(scoreString), Text.yellow(roundValue))
                scoreTooltipsList.push(scoreTooltips)
            })
            lineNum = AddForTextLines(text, scoreTooltipsList, lineNum)
            return
        } else {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.glass_vial.1`)], lineNum)
        }
    })



    tooltip.addAdvanced('kubejs:preset_structure_data_storage', (item, advanced, text) => {
        let lineNum = 1
        lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.preset_structure_data_storage.default.1`).gray()], lineNum)
        if (tooltip.isShift()) {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.shift_holding.1`)], lineNum)
            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.preset_structure_data_storage.shift.1`, ExperimentalWorldEditObeliskHover)], lineNum)
            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.preset_structure_data_storage.shift.2`, RepairProtocolHover)], lineNum)
        } else {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.shift.1`)], lineNum)
        }
    })

    tooltip.addAdvanced('kubejs:extract_loot_data_storage', (item, advanced, text) => {
        let lineNum = 1
        lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.extract_loot_data_storage.default.1`).gray()], lineNum)
        if (tooltip.isShift()) {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.shift_holding.1`)], lineNum)
            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.extract_loot_data_storage.shift.1`, ExperimentalWorldEditObeliskHover)], lineNum)
            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.extract_loot_data_storage.shift.2`, RepairProtocolHover, ExperimentalWorldEditObeliskHover)], lineNum)
        } else {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.shift.1`)], lineNum)
        }
    })

    tooltip.addAdvanced('kubejs:rule_structure_data_storage', (item, advanced, text) => {
        let lineNum = 1
        lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.rule_structure_data_storage.default.1`).gray()], lineNum)
        if (tooltip.isShift()) {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.shift_holding.1`)], lineNum)
            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.rule_structure_data_storage.shift.1`, ExperimentalWorldEditObeliskHover)], lineNum)
            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.rule_structure_data_storage.shift.2`, RepairProtocolHover)], lineNum)
        } else {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.shift.1`)], lineNum)
        }
    })

    tooltip.addAdvanced('kubejs:signal_launch_permit', (item, advanced, text) => {
        let lineNum = 1
        lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.signal_launch_permit.default.1`).gray()], lineNum)
        let nbt = item.getOrCreateTag()
        if (tooltip.isShift()) {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.shift_holding.1`)], lineNum)
            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.signal_launch_permit.shift.1`)], lineNum)
            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.signal_launch_permit.shift.2`, ExperimentalWorldEditObeliskHover)], lineNum)
            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.signal_launch_permit.shift.3`, RepairProtocolHover)], lineNum)
        } else {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.shift.1`)], lineNum)
        }

        if (tooltip.isAlt()) {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.alt_holding.1`)], lineNum)

            let capacity = 1
            if (nbt.contains('capacity')) {
                capacity = nbt.getInt('capacity')
            }

            lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.signal_launch_permit.alt.1`, capacity)], lineNum)

            if (nbt.contains('spawnerIdList')) {
                let spawnerIdList = nbt.getList('spawnerIdList', GET_STRING_TYPE)
                if (spawnerIdList.size() > 0) {
                    lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.signal_launch_permit.alt.2`)], lineNum)
                    spawnerIdList.forEach(spawnerId => {
                        lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.signal_launch_permit.spawn_id.${spawnerId.toString()}`)], lineNum)
                    })
                }
            }

            if (nbt.contains('modifierList')) {
                let modifierList = nbt.getList('modifierList', GET_STRING_TYPE)
                if (modifierList.size() > 0) {
                    lineNum = AddForTextLines(text, [Text.translatable(`tooltips.kubejs.signal_launch_permit.alt.3`)], lineNum)
                    modifierList.forEach(modifier => {
                        lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.signal_launch_permit.modifier.${modifier.toString()}`)], lineNum)
                    })
                }
            }

        } else {
            lineNum = AddForTextLines(text, [Text.translate(`tooltips.kubejs.tool.alt.1`)], lineNum)
        }
    })
})