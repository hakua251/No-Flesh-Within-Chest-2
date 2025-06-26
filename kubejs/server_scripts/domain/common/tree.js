// priority: 1000
const $SaplingGrowTreeEvent = Java.loadClass('net.minecraftforge.event.level.SaplingGrowTreeEvent')
NativeEvents.onEvent($SaplingGrowTreeEvent,/** @param {Internal.SaplingGrowTreeEvent} event **/ event => {
    const level = event.level
    const pos = event.pos
    // let tempSphere = new SphereModel()
    //     .setShellProperties(Block.getBlock('minecraft:glass').defaultBlockState(), 5, 1)
    // tempSphere.generateSphere(level, pos.above(30))
    // level.removeBlock(pos, false)
    // event.setResult('deny')
})