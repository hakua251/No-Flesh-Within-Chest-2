// priority: 1000
const StressoDecorator = RenderJSItemDecoratorHandler.registerForAllItem('stresso', ctx => { })

StressoDecorator.setRender(ctx => {
    const item = ctx.itemStack
    const guiGraphics = ctx.guiGraphics
    if (!item.isEmpty() && item.hasNBT()) {
        let nbt = item.getNbt()
        if (!nbt.contains('Stresso')) return
        let stressoNbt = nbt.getCompound('Stresso')
        let max = stressoNbt.contains('Max') ? stressoNbt.getInt('Max') : 100
        let cur = stressoNbt.contains('Cur') ? stressoNbt.getInt('Cur') : 0
        RenderJSRenderSystem.setShaderColorJS(1, 1, 1, 1)
        RenderJSRenderSystem.disableDepthTestJS()
        RenderJSUtils.fillRect(guiGraphics, ctx.xOffset + 1, ctx.yOffset + 2, 1, 13, 0, 0, 0, 255)
        if (max < cur) {
            RenderJSUtils.fillRect(guiGraphics, ctx.xOffset + 1, ctx.yOffset + 2, 1, 13, 255, 25, 0, 255)
        } else {
            RenderJSUtils.fillRect(guiGraphics, ctx.xOffset + 1, ctx.yOffset + 16 - cur / max * 13, 1, cur / max * 13, 255, 220, 0, 255)
        }
    }
})