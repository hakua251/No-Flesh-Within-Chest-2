// priority: 900
JadeEvents.onClientRegistration((event) => {
    event.block('kubejs:dungeon_obelisk', $Block).tooltip((tooltip, accessor) => {
        const serverData = accessor.getServerData()
        // 净化类型
        if (!serverData.contains('purifyAction')) return
        let purifyAction = serverData.getString('purifyAction')
        tooltip.add([
            Text.translatable(`jade.kubejs.dungeon_obelisk.purify_action.prefix`),
            Text.translatable(`jade.kubejs.dungeon_obelisk.purify_action.colon`),
            Text.translatable(`jade.kubejs.dungeon_obelisk.purify_action.${purifyAction}`),
        ])
    })
})