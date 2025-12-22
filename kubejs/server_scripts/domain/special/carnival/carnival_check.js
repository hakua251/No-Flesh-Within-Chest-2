// priority: 500
BlockEvents.rightClicked('biomancy:flesh', event => {
    const item = event.item
    if (!item.hasTag('vinery:red_wine')) return
    const block = event.block
    const pos = block.pos
    const level = event.level
    const pPos = pos.offset(x, 0, z)
    const pBlockState = level.getBlockState(pPos)
    if (pBlockState.is(KaleidoscopeCookeryTableTag)) {
        let aboveBlock = level.getBlockState(pos.above())
        if (aboveBlock) {
            blockOnTableList.push(aboveBlock)
        }
    }
    if (pBlockState.is(FoodBagTag)) {
        foodBagBlockList.push(pBlockState)
    }
})

/**
 * @param {Internal.BlockEntityJS} ctx 
 */
global.CarnivalServerTick = function (ctx) {
    const data = ctx.data
    const level = ctx.level
    if (level.isDay()) {
        failCarnival(ctx, 'msg.kubejs.carnival.fail.isDay')
        return
    }
    if (level.isThundering() || level.isRaining()) {
        failCarnival(ctx, 'msg.kubejs.carnival.fail.isThunderingOrRaining')
        return
    }
    let timer = data.getInt('timer')
    if (timer != 0) {
        timer--
        data.putInt('timer', timer)
        return
    }

    const stage = data.getInt('stage')
    switch (stage) {
        case 0:
            if (!CarnivalStage0(ctx)) {
                failCarnival(ctx, 'msg.kubejs.carnibal_stage.0.fail')
                return
            }
            data.putInt('timer', 60)
            return
        case 1:
            if (!CarnivalStage1(ctx)) {
                failCarnival(ctx, 'msg.kubejs.carnibal_stage.1.fail')
                return
            }
            data.putInt('timer', 200)
            return
        // case 2:
        //     if (!CarnivalStage2(ctx)) {
        //         failCarnival(ctx, 'msg.kubejs.carnibal_stage.2.fail')
        //         return
        //     }
        //     break;
        // case 3:
        //     if (!CarnivalStage3(ctx)) {
        //         failCarnival(ctx, 'msg.kubejs.carnibal_stage.3.fail')
        //         return
        //     }
        //     break;
        default:
            break;
    }
    data.putInt('timer', 200)
}

/**
 * 
 * @param {Internal.BlockEntityJS} ctx 
 * @param {Internal.Component} reason 
 * @returns 
 */
function failCarnival(ctx, reason) {
    ctx.level.setBlockAndUpdate(ctx.blockPos, Block.getBlock('biomancy:flesh').defaultBlockState())
    CarnivalAnnounceToPlayers(ctx, reason)
    return
}

/**
 * 
 * @param {Internal.BlockEntityJS} ctx 
 * @param {Internal.Component} info 
 * @returns 
 */
function CarnivalAnnounceToPlayers(ctx, info) {
    const players = ctx.block.getPlayersInRadius(16)
    players.forEach(pPlayer => pPlayer.tell(info))
}
