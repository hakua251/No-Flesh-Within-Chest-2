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
    if (OrganItemCoolDown(player, item)) return
    OrganKeyBindEvent.run(player, item, customData, [event])
    UpdateClientISSSpellDataEvent(customData, player)
})
