// priority: 900
/**
 * @type {Map<Internal.Block_, Internal.BlockState_>}
 */
const VitaBlockRandomDecayMap = new Map()

BlockEvents.modification((event) => {
    VitaBlockRandomDecayMap.forEach((v, k) => {
        event.modify(k, ctx => {
            ctx.setRandomTickCallback(/** @param {Internal.RandomTickCallbackJS} pCtx**/pCtx => {
                const level = pCtx.level
                if (level.getDimension().toString()!='minecraft:overworld') return
                level.setBlockAndUpdate(pCtx.block.pos, v)
            })
        })
    })
})

/**
 * 
 * @param {Internal.BlockPredicate_} block 
 * @param {Internal.BlockState_} targetBlock 
 */
function RegisterVitaBlockRandomDecay(block, targetBlock) {
    VitaBlockRandomDecayMap.set(block, targetBlock)
}

