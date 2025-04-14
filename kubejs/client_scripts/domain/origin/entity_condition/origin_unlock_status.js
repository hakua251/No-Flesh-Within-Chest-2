// priority: 500
let OriginUnlockStatus = {}

NetworkEvents.dataReceived('sync_origin_unlock_status', (event) => {
    OriginUnlockStatus = {}
    /**@type {Internal.CompoundTag} */
    let data = event.getData()
    Object.keys(data).forEach(key => {
        OriginUnlockStatus[key] = data.getBoolean(key)
    })
    
})

global.OriginEntityConditionClientEvent = (event) => {
    let id = event.getId().toString()
    if (!OriginUnlockStatus[id]) {
        event.cancel()
    }
}