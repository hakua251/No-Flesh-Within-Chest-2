// priority: 500
/**
 * 
 * @param {Internal.BlockEntityJS} ctx 
 * @returns {boolean}
 */
function CarnivalStage0(ctx) {
    const pos = ctx.blockPos
    const level = ctx.level
    const data = ctx.data
    const lightsPosition = [
        [
            [-4, 5, -4],
            [-4, 5, 4],
            [4, 5, -4],
            [4, 5, 4]
        ],
        [
            [-8, 3, -8],
            [-8, 3, 8],
            [8, 3, -8],
            [8, 3, 8]
        ],
        [
            [-8, 7, -4],
            [-8, 7, 4],
            [8, 7, -4],
            [8, 7, 4]
        ],
        [
            [-4, 7, -8],
            [-4, 7, 8],
            [4, 7, -8],
            [4, 7, 8]
        ]
    ]
    const subStage = Math.min(data.getInt('subStage'), 3)
    lightsPosition[subStage].forEach(lightPos => {
        let pPos = pos.offset(lightPos[0], lightPos[1], lightPos[2])
        let blockState = level.getBlockState(pPos)
        if (!blockState || blockState.isAir()) {
            placeLightBlock(level, pPos)
            level.playSound(null, pPos.getX(), pPos.getY(), pPos.getZ(), 'minecraft:block.wool.place', $SoundSource.BLOCKS, 1, 1)
        }
    })
    level.playSound(null, pos.getX(), pos.getY(), pos.getZ(), 'minecraft:block.bell.use', $SoundSource.BLOCKS, 1, 1)
    if (subStage == 3) {
        data.putInt('stage', 1)
        data.putInt('subStage', 0)
        CarnivalAnnounceToPlayers(ctx, Text.translatable('msg.kubejs.carnibal_stage.0.success'))
        return true
    }
    data.putInt('subStage', subStage + 1)
    return true
}

/**
 * 
 * @param {Internal.Level} level 
 * @param {BlockPos} pos 
 */
function placeLightBlock(level, pos) {
    level.setBlockAndUpdate(pos, Block.getBlock('ars_nouveau:light_block').defaultBlockState())
}