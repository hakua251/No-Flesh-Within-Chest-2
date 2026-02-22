// priority: 1000
const InfectedDecorator = RenderJSItemDecoratorHandler.registerForAllItem('infected', ctx => { })

InfectedDecorator.setRender(ctx => {
    let item = ctx.itemStack
    if (item.isEmpty() || !item.hasNBT()) return
    let nbt = item.getNbt()
    if (!nbt.getBoolean('Infected')) return
    let guiGraphics = ctx.guiGraphics
    RenderJSRenderSystem.setShaderColorJS(1, 1, 1, 1)
    RenderJSRenderSystem.disableDepthTestJS()
    guiGraphics.blit(new ResourceLocation('kubejs:textures/decorator/infected_overlay.png'), ctx.xOffset, ctx.yOffset, 0, 0, 16, 16, 16, 16)
})