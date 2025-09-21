// priority: 500
BlockEvents.rightClicked('minecraft:crying_obsidian', event => {
    const item = event.getItem()
    const block = event.getBlock()
    /**@type {Internal.ServerLevel} */
    const level = event.getLevel()
    const player = event.getPlayer()

    if (event.getHand() == 'OFF_HAND') return
    if (!item.is('kubejs:amethyst_core')) return
    let belowBlock = block.offset(0, -1, 0)
    let altarBlock = Block.getBlock('skyarena:altar_battle').defaultBlockState()
    let altarTopBlock = Block.getBlock('skyarena:altar_battle_top').defaultBlockState()
    altarBlock.setValue(BlockProperties.HORIZONTAL_FACING, player.getHorizontalFacing().getOpposite())
    altarTopBlock.setValue(BlockProperties.HORIZONTAL_FACING, player.getHorizontalFacing().getOpposite())
    switch (belowBlock.id) {
        case 'graveyard:dark_iron_block': {
            if (GraveyardBasicArenaPattern.find(level, belowBlock.getPos())) {
                level.setBlockAndUpdate(block.getPos(), altarBlock)
                level.setBlockAndUpdate(block.getPos().offset(0, 1, 0), altarTopBlock)
                /**@type {Internal.AltarBlockEntity} */
                let altarEntity = level.getBlockEntity(block.getPos())
                altarEntity.switchToTargetArena('basic_graveyard')
                altarEntity.setBattleEndTime(level.getTime())
            } else if (GraveyardAdvanceArenaPattern.find(level, belowBlock.getPos())) {
                level.setBlockAndUpdate(block.getPos(), altarBlock)
                level.setBlockAndUpdate(block.getPos().offset(0, 1, 0), altarTopBlock)
                /**@type {Internal.AltarBlockEntity} */
                let altarEntity = level.getBlockEntity(block.getPos())
                altarEntity.switchToTargetArena('advance_graveyard')
                altarEntity.setBattleEndTime(level.getTime())
            }
            break
        }
        case 'minecraft:respawn_anchor': {
            if (NetherBasicArenaPattern.find(level, belowBlock.getPos())) {
                level.setBlockAndUpdate(block.getPos(), altarBlock)
                level.setBlockAndUpdate(block.getPos().offset(0, 1, 0), altarTopBlock)
                /**@type {Internal.AltarBlockEntity} */
                let altarEntity = level.getBlockEntity(block.getPos())
                altarEntity.switchToTargetArena('basic_nether')
                altarEntity.setBattleEndTime(level.getTime())
            } else if (NetherAdvanceArenaPattern.find(level, belowBlock.getPos())) {
                level.setBlockAndUpdate(block.getPos(), altarBlock)
                level.setBlockAndUpdate(block.getPos().offset(0, 1, 0), altarTopBlock)
                /**@type {Internal.AltarBlockEntity} */
                let altarEntity = level.getBlockEntity(block.getPos())
                altarEntity.switchToTargetArena('advance_nether')
                altarEntity.setBattleEndTime(level.getTime())
            }
        }
    }
})

