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
    if (!customDataMap.containsKey('organEffectList')) return
    /** @type {Map<string, OragnEffectModel>} */
    let organEffectObj = customDataMap.get('organEffectList')
    let organEffectList = []
    organEffectObj.forEach((value, key) => {
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


/**
 * 
 * @param {Internal.ItemStack} item 
 */
function OragnEffectModel(item) {
    this.item = item
    this.customText = ''
    this.visible = true
    this.overlay = true
    this.priority = 100
}

OragnEffectModel.prototype = {
    setCustomText(text) {
        this.customText = text
        return this
    },
    setVisible(visible) {
        this.visible = visible
        return this
    },
    setOverlay(overlay) {
        this.overlay = overlay
        return this
    },
    setPriority(priority) {
        this.priority = priority
        return this
    }
}