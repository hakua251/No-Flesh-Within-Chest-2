// priority: 500
const OrganEffectSlotDefinition = [
    {
        id: 'organ_effect_1',
        x: -30,
        y: '-$screenH/2+49'
    },
    {
        id: 'organ_effect_2',
        x: -22,
        y: '-$screenH/2+49'
    },
    {
        id: 'organ_effect_3',
        x: -14,
        y: '-$screenH/2+49'
    },
    {
        id: 'organ_effect_4',
        x: -6,
        y: '-$screenH/2+49'
    }
]

PlayerEvents.tick(event => {
    const player = event.player
    if (!player.chestCavityInstance || !player.chestCavityInstance.inventory) return
    const chestCavity = player.chestCavityInstance
    const customDataMap = chestCavity.customEntityDataMap
    if (!customDataMap.containsKey('organEffectChanged') || !customDataMap.get('organEffectChanged')) return
    if (!customDataMap.containsKey('organEffectMap')) return
    /** @type {Map<string, OragnEffectModel>} */
    let organEffectMap = customDataMap.get('organEffectMap')
    let organEffectList = []
    organEffectMap.forEach((value, key) => {
        if (value instanceof OragnEffectModel) {
            organEffectList.push(value)
        }
    })

    organEffectList.sort((a, b) => {
        return b.priority - a.priority
    })
    let paintObj = {}
    for (let i = 0; i < organEffectList.length; i++) {
        if (i >= OrganEffectSlotDefinition.length) break
        /**@type {OragnEffectModel} */
        let effect = organEffectList[i]
        let slotDef = OrganEffectSlotDefinition[i]
        paintObj[slotDef.id] = {
            'type': 'item',
            'x': slotDef.x,
            'y': slotDef.y,
            'z': 1,
            'w': 8,
            'h': 8,
            'alignX': 'right',
            'alignY': 'bottom',
            'item': effect.item.id,
            'overlay': effect.overlay,
            'customText': effect.customText,
            'visible': effect.visible
        }
    }
    player.paint({
        '*': {
            remove: true
        }
    })
    customDataMap.put('organEffectChanged', false)
    player.paint(paintObj)
})
