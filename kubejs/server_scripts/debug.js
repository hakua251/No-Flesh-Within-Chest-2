// priority: 500

// todo 调试方法
ItemEvents.rightClicked('stick', event => {
    let player = event.player
    // let pos = GenDungeonIslands(event.level)
    let map = new Map()
    // map.set('kubejs:warden_core', new OragnEffectModel(Item.of('kubejs:warden_core')).setPriority(100).setCustomText('测试2'))
    player.chestCavityInstance.customEntityDataMap.put('organEffectMap', map)
    player.chestCavityInstance.customEntityDataMap.put('organEffectChanged', true)
})