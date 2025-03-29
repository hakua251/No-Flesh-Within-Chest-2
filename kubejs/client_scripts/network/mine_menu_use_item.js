// priority: 500
MineMenuEvents.clickActionUseItem(event => {
    const item = event.item
    if (!item.hasTag('kubejs:key_active') && !item.hasTag('kubejs:key_active_only')) return
    let nbt = event.item.serializeNBT()
    event.player.sendData('mine_menu_use_item', nbt)
})

// 旧按键逻辑，用于给不善于配置的玩家兜底
ClientEvents.tick(event => {
    if (global.OrganSkill.consumeClick()) {
        event.player.sendData('mine_menu_use_item')
    }
})