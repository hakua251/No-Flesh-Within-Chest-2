// priority: 3000

// /**
//  * 
//  * @param {Internal.ServerPlayer} player 
//  */
// function IsUnderComabt(player) {
//     if (!player.nbt) return false
//     if (!player.nbt.contains('ForgeData')) return false
//     let forgeData = player.nbt.get('ForgeData')
//     if (!forgeData.contains('PlayerPersisted')) return false
//     let playerPersisted = forgeData.get('PlayerPersisted')
//     if (!playerPersisted.contains('out_of_combat')) return false
//     /**@type {Internal.CompoundTag} */
//     let outOfCombat = playerPersisted.get('out_of_combat')
//     return outOfCombat.getInt('outOfCombatTime') == 0
// }

/**
 * 
 * @param {Internal.ServerLevel} level 
 * @param {Internal.ServerPlayer} player 
 * @param {Internal.EntityType} entityType 
 */
function GetMobKillCount(level, player, entityType) {
    let progressionData = GetPlayerProgressionData(level)
    return progressionData.getKillCount(player.uuid, entityType)
}



/**
 * @param {Internal.ServerLevel} level 
 * @returns {Internal.PlayerProgressionData}
 */
function GetPlayerProgressionData(level) {
    return $PlayerProgressionData.getOrCreate(level)
}


/** @type {Map<string,{channel:string,data:Internal.CompoundTag}[]>} */
const S2CDataQueue = new Map()

/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @param {string} channel 
 */
function EnqueueSendData(player, channel, data) {
    if (player.connection) {
        player.sendData(channel, data)
    } else {
        let playerUuid = String(player.uuid.toString())
        let queue = S2CDataQueue.get(playerUuid)
        if (!queue) {
            queue = []
            S2CDataQueue.set(playerUuid, queue)
        }
        queue.push({ 'channel': channel, 'data': data })
    }
}


PlayerEvents.loggedIn(event => {
    let player = event.player
    let playerUuid = String(player.uuid.toString())
    let queue = S2CDataQueue.get(playerUuid)
    if (queue) {
        queue.forEach(data => {
            player.sendData(data.channel, data.data)
        })
        S2CDataQueue.delete(playerUuid)
    }
})