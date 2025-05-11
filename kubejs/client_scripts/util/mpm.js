// priority: 3000
/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @param {noppes.mpm.ModelData} modelData 
 */
function UpdateMpm(player, modelData) {
    modelData.refreshParts()
    modelData.updateTransate()
    modelData.save()
    $MpmPackets.sendNearby(player, new $PacketPlayerDataSend(player.getUuid(), modelData.writeToNBT()))
}


/**
 * @param {Internal.ItemStack} item 
 */
function GetOrganItemMPMType(item) {
    if (!item.hasNBT()) return OrganItemMPMTypeNotShow
    let nbt = item.getNbt()
    if (!nbt.contains('MPMType')) return OrganItemMPMTypeNotShow
    return nbt.getInt('MPMType')
}

/**
 * @param {Internal.ItemStack} item 
 * @param {number} type
 * @returns {Internal.ItemStack}
 */
function GetOrganItemWithMPMType(item, type) {
    let nbt = item.getOrCreateTag()
    nbt.putInt('MPMType', type)
    return item
}