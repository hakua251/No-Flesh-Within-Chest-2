// priority: 500
const DefaultConfigsPath = 'data'
const VowCoinDataPath = 'data/vow_coin_data.json'
const VowCoinData = {}

const OriginUnlockStatusUuidMap = {}

if (FilesJS.exists(VowCoinDataPath)) {
    let vowDataJson = JsonIO.readJson(VowCoinDataPath).getAsJsonObject()
    vowDataJson.entrySet().forEach(vowData => {
        let playerUuid = vowData.getKey()
        let coinCount = vowData.getValue().getAsInt()
        if (!VowCoinData[playerUuid]) {
            VowCoinData[playerUuid] = coinCount
        }
    })
} else {
    FilesJS.appendFile(VowCoinDataPath, '{}')
}
PlayerEvents.loggedIn(event => {
    const player = event.player
    const uuid = player.getUuid().toString()
    if (VowCoinData[uuid] >= 0) {
        // todo 还没写同步方案
    }
})
