// priority: 500
StartupEvents.registry('block', event => {
    event.create('kubejs:carnival', 'basic')
        .stoneSoundType()
        .textureAll('kubejs:block/carnival')
        .blockEntity(ctx => {
            let defaultData = new $CompoundTag()
            defaultData.putInt('stage', 0)
            defaultData.putInt('timer', 60)
            defaultData.putInt('subStage', 0)
            defaultData.putInt('canTry', 0)
            ctx.initialData(defaultData)
            ctx.serverTick((pCtx) => {
                global.CarnivalServerTick(pCtx)
            })
        })
})