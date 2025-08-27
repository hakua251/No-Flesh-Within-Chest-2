// priority: 3000
/**
 * 
 * @param {Internal.CompoundTag} data 
 */
function DeserializeItemFromNbt(data) {
    let id = data.getString('id')
    let count = data.getInt('Count')
    let nbt = data.getCompound('tag')
    if (!id) {
        return null
    }
    let res = Item.of(id, count)
    if (nbt) {
        res.setNbt(nbt)
    }
    return res
}

function GetTreaseMapItem(level, pos) {
    let mapItem = $MapItem.create(level, pos.x, pos.z, 1, true, true)
    $MapItem.renderBiomePreviewMap(level, mapItem)
    $MapItemSavedData.addTargetDecoration(mapItem, pos, "+", $MapDecorationType.RED_X)
    return mapItem
}

/**
 * 
 * @param {ResourceLocation} lootId 
 * @returns {Internal.LootTable}
 */
function GetLootTable(lootId) {
    const lootData = Utils.server.getLootData()
    return lootData.getLootTable(lootId)
}


/**
 * 
 * @param {Internal.Level} level 
 * @param {BlockPos} blockPos 
 * @param {Internal.ItemStack[]} lootList 
 */
function SpawnLootAtLocation(level, blockPos, lootList) {
    /**@type {Internal.ItemStack[][]} */
    let itemChunks = SliceChunkArray(lootList, 3)
    let tickCounter = 5
    itemChunks.forEach(itemChunk => {
        level.server.scheduleInTicks(tickCounter, callback => {
            itemChunk.forEach(item => {
                $Containers.dropItemStack(level, blockPos.x, blockPos.y, blockPos.z, item)
            })
        })
        tickCounter = tickCounter + 10
    })
}