// priority: 1000
// 匠魂相关
StartupEvents.registry('item', event => {
    // 清澈宝石
    event.create('clear_crystal').texture('kubejs:item/tcon/clear_crystal').maxStackSize(64).fireResistant()
})