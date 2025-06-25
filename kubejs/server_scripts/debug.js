// priority: 500

// todo 调试方法
ItemEvents.rightClicked('stick', event => {
    /**@type {Internal.ServerPlayer} */
    let player = event.player
    let level = event.level
    player.tell(1)
    let tempSphere = new SphereModel()
        .setShellProperties(Block.getBlock('minecraft:glass').defaultBlockState(), 5, 1)
    // let tempSphere = new GeodeSphereModel()
    //     .addVein(Block.getBlock('minecraft:diamond_block').defaultBlockState(), 23, 'cloud')
    //     .setFillBlock(Block.getBlock('minecraft:glass').defaultBlockState())
    //     .setShellProperties(Block.getBlock('minecraft:glass').defaultBlockState(), 24, 1)
    player.tell(2)
    tempSphere.generateSphere(level, player.block.getPos().atY(100))
    player.tell(3)
})