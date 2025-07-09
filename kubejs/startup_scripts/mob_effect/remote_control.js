// priority: 1000
const RemoteControlEffectAttributeMap = {
    'RemoteControlAttackModifier': {
        uuid: '1FD011E7-201D-4645-81DD-6B25E795ACF3',
        type: 'minecraft:generic.attack_damage',
    },
    'RemoteControlArmorModifier': {
        uuid: 'ECC61C94-F81C-47DE-9E89-E45B6E377FB9',
        type: 'minecraft:generic.armor',
    }
}
StartupEvents.registry('mob_effect', event => {
    event.create('remote_control')
        .harmful()
        .addEffect((entity, attributeMap, lvl) => {
            Object.keys(RemoteControlEffectAttributeMap).forEach(key => {
                let attributeInstance = entity.getAttribute(RemoteControlEffectAttributeMap[key].type)
                if (!attributeInstance) return
                attributeInstance.removeModifier(RemoteControlEffectAttributeMap[key].uuid)
            })
        })
        .removeEffect((entity, attributeMap, lvl) => {
            Object.keys(RemoteControlEffectAttributeMap).forEach(key => {
                let attributeInstance = entity.getAttribute(RemoteControlEffectAttributeMap[key].type)
                if (!attributeInstance) return
                attributeInstance.removeModifier(RemoteControlEffectAttributeMap[key].uuid)
            })
        })
        .color(Color.DARK_GRAY)
})
