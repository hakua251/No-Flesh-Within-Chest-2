// priority: 999
const OrganKeyBindEvent = new OrganKeyActiveEventModel('key_active')

NetworkEvents.dataReceived('mine_menu_use_item', event => {
    const player = event.player
    const nbt = event.data
    if (!player) return
    let cooldowns = player.getCooldowns()
    var item
    if (!nbt) {
        // 触发兜底逻辑/触发直接使用器官按键逻辑，按照顺序触发
        let ccInstance = player.chestCavityInstance
        let slotMap = ccInstance.getListenerMap('key_active')
        if (!slotMap) return
        let ccInv = ccInstance.inventory
        for (let [slotIndex, slotItem] in slotMap) {
            let curItem = ccInv.getStackInSlot(slotIndex)
            if (!curItem || curItem.isEmpty()) return
            item = curItem
            if (!cooldowns.isOnCooldown(item)) {
                break
            }
        }
    } else {
        item = DeserializeItemFromNbt(nbt)
    }
    if (!item || item.isEmpty()) return
    let customData = {}
    if (cooldowns.isOnCooldown(item)) {
        let cooldownInstance = cooldowns.cooldowns.getOrDefault(item.getItem(), null)
        if (!cooldownInstance) return
        let endTime = cooldownInstance.endTime
        let leftTime = endTime - cooldowns.tickCount
        player.setStatusMessage(Text.translatable('status_msg.kubejs.warden_core.key_active.cooldown', Text.gold(item.getHoverName()), leftTime / 20))
        return
    }

    OrganKeyBindEvent.run(player, item, customData, [event])
    UpdateClientISSSpellDataEvent(customData, player)
})
