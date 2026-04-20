// priority: 500
RegistryOrgan('kubejs:silverfish_gland')
    .addScore('chestcavity:climbing', 0.5)
    .addScore('chestcavity:endurance', 0.5)
    .setCanSpawn(true)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.BlockRightClickedEventJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function SilverfishGlandBlockRightClicked(customData, event, organItem, organIndex, slotType) {
    const block = event.block
    const level = event.level
    const player = event.player
    if (event.hand != 'main_hand') return
    if (!player.mainHandItem.isEmpty()) return
    let state = block.getBlockState()
    let blockSummon = block instanceof $AbstractSkullBlock ? new $AnimHeadSummon(level, state, new $CompoundTag()) : new $AnimBlockSummon(level, state)
    blockSummon.setColor(player.getTeamColor())
    blockSummon.setPos(block.getPos())
    blockSummon.setTicksLeft(20 * 300)
    blockSummon.setAggressive(true)
    blockSummon.setTame(true)
    blockSummon.tame(player)
    blockSummon.setOwnerID(player.getUuid())
    level.addFreshEntity(blockSummon)
    level.removeBlock(block.getPos(), false)
}



RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:silverfish_gland')
        .addOnlyStrategy('block_right_clicked', SilverfishGlandBlockRightClicked)
)