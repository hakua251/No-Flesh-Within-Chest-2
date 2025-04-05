// priority: 3000
BlockEvents.broken('kubejs:dungeon_obelisk', event => {
    const block = event.block
    const level = event.level
    if (!block.getBlockState().hasProperty(BlockProperties.DOUBLE_BLOCK_HALF)) return
    const half = block.getBlockState().getValue(BlockProperties.DOUBLE_BLOCK_HALF)
    const pos = block.getPos()
    switch (half) {
        case 'lower':
            let aboveBlock = level.getBlock(pos.above())
            if (aboveBlock.id != 'kubejs:dungeon_obelisk') return
            level.setBlock(pos.above(), Blocks.AIR.defaultBlockState(), 3)
            break
        case 'upper':
            let belowBlock = level.getBlock(pos.below())
            if (belowBlock.id != 'kubejs:dungeon_obelisk') return
            level.setBlock(pos.below(), Blocks.AIR.defaultBlockState(), 3)
            break
    }
})

BlockEvents.placed('kubejs:dungeon_obelisk', event => {
    const block = event.block
    const level = event.level
    if (!block.getBlockState().hasProperty(BlockProperties.DOUBLE_BLOCK_HALF)) return 
    const half = block.getBlockState().getValue(BlockProperties.DOUBLE_BLOCK_HALF)
    const pos = block.getPos()
    switch (half) {
        case 'lower':
            level.setBlock(pos.above(), block.blockState.setValue(BlockProperties.DOUBLE_BLOCK_HALF, $DoubleBlockHalf.UPPER), 3)
            break
        case 'upper':
            level.setBlock(pos.below(), block.getBlockState().set(BlockProperties.DOUBLE_BLOCK_HALF, $DoubleBlockHalf.LOWER), 3)
            break 
    }
})


BlockEvents.rightClicked('kubejs:dungeon_obelisk', event => {
    let block = event.block
    const level = event.level
    if (event.hand != 'main_hand') return
    let blockState = block.getBlockState()
    if (!blockState.hasProperty(OBELISK_STATE)) return
    if (!blockState.hasProperty(BlockProperties.DOUBLE_BLOCK_HALF)) return
    let blockPos = block.getPos()
    if (blockState.getValue(BlockProperties.DOUBLE_BLOCK_HALF) == $DoubleBlockHalf.UPPER) {
        blockPos = blockPos.below()
        block = level.getBlock(blockPos)
        blockState = block.getBlockState()
        if (!blockState.hasProperty(BlockProperties.DOUBLE_BLOCK_HALF) || blockState.getValue(BlockProperties.DOUBLE_BLOCK_HALF) != $DoubleBlockHalf.LOWER) return
    }
    
    let stage = blockState.getValue(OBELISK_STATE).intValue()
    let upperBlockPos = blockPos.above()
    let upperBlockState = level.getBlockState(upperBlockPos)
    let obeliskBlockEntity = level.getBlockEntity(blockPos)
    if (!obeliskBlockEntity) return
    switch (stage) {
        case 0:
            level.setBlockAndUpdate(blockPos, blockState.setValue(OBELISK_STATE, Int2Integer(1)))
            level.setBlockAndUpdate(upperBlockPos, upperBlockState.setValue(OBELISK_STATE, Int2Integer(1)))

            if (!obeliskBlockEntity.getPersistentData().contains('spawnId')) return
            let spawnId = obeliskBlockEntity.getPersistentData().getString('spawnId')
            let area = GenDungeonLevelArea(level, blockPos)
            if (!area) return
            let manager = LoquatAreaManager.of(level)
            manager.addEvent(new $SpawnMobAreaKubeEvent(area, spawnId, 1, 0))
            break
        case 1:
            // if (!obeliskBlockEntity.getPersistentData().contains('spawnPos')) return
            // let spawnPosNbt = obeliskBlockEntity.getPersistentData().get('spawnPos')
            // let spawnPos = ConvertNbt2Pos(spawnPosNbt)
            // BuildNewDungeonLevel(level, spawnPos)
            // level.setBlockAndUpdate(blockPos, blockState.setValue(OBELISK_STATE, Int2Integer(3)))
            // level.setBlockAndUpdate(upperBlockPos, upperBlockState.setValue(OBELISK_STATE, Int2Integer(3)))
            // break
        case 2:
            // if (!obeliskBlockEntity.getPersistentData().contains('spawnPos')) return
            // let spawnPosNbt = obeliskBlockEntity.getPersistentData().get('spawnPos')
            // let spawnPos = ConvertNbt2Pos(spawnPosNbt)
            // BuildNewDungeonLevel(level, spawnPos)
            // level.setBlockAndUpdate(blockPos, blockState.setValue(OBELISK_STATE, Int2Integer(3)))
            // level.setBlockAndUpdate(upperBlockPos, upperBlockState.setValue(OBELISK_STATE, Int2Integer(3)))
            // break
        default:
            break
    }
})