// priority: 500

// todo 调试方法
ItemEvents.rightClicked('stick', event => {
    let player = event.player
    let modelData = $ModelData.get(player)
    let testPart = new $MpmPartData()
    let nbt = new $CompoundTag()
    // nbt.putString('Id', 'moreplayermodels:parts/accessories/backpack.json')
    nbt.putString('Id', 'moreplayermodels:parts/legs/legs_naga.json')
    nbt.putBoolean('UsePlayerSkin', false)
    nbt.putString('Url', '')
    nbt.putString('Texture', '')
    nbt.putInt('ColorR', 1)
    nbt.putInt('ColorG', 1)
    nbt.putInt('ColorB', 1)
    testPart.setNbt(nbt)
    modelData.mpmParts.add(0, testPart)
    modelData.refreshParts()
    modelData.updateTransate()

    $MpmPackets.sendNearby(player, new $PacketPlayerDataSend(player.getUuid(), modelData.writeToNBT()))
})