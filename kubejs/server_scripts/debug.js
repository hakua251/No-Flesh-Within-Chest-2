// priority: 500

// todo 调试方法
ItemEvents.rightClicked('stick', event => {
    /**@type {Internal.ServerPlayer} */
    const player = event.player
    const level = event.level
    const server = event.server
    let rad = JavaMath.toRadians(player.getYHeadRot() + 90)
    let dx = JavaMath.cos(rad)
    let dy = JavaMath.sin(rad)

    let nowMove = player.getDeltaMovement().add(dx * 10, 0.5, dy * 10)
    player.setDeltaMovement(nowMove)
    player.connection.send(new $ClientboundSetEntityMotionPacket(player))
    let timer = 0
    server.scheduleRepeatingInTicks(2, (ctx) => {
        level.spawnParticles($ParticleTypes.SONIC_BOOM, false, player.x, player.y, player.z, 0, 0, 0, 1, 0)
        if (timer > 5) ctx.clear()
        timer++
    })


    // let blockSummon = new $AnimBlockSummon(level, Blocks.SAND.defaultBlockState())
    // blockSummon.setColor(0X00c9b5)
    // blockSummon.setPos(player.blockPosition())
    // blockSummon.setTicksLeft(20 * 60)
    // level.addFreshEntity(blockSummon)
    // let nbt = new $CompoundTag()
    // nbt.putString('SkullOwner', 'YoruNina')
    // let blockSummon = new $AnimHeadSummon(level, Blocks.PLAYER_HEAD.defaultBlockState(), nbt)
    // blockSummon.setColor(0X00c9b5)
    // blockSummon.setPos(player.blockPosition())
    // blockSummon.setTicksLeft(20 * 60)
    // level.addFreshEntity(blockSummon)

    // let cap = GetPlayerCuriosInventoryCap(player)
    // cap.getCurios().forEach((str, item) => {
    //     console.log(str)
    // })
    // SetDayDuration(server, 12000)
    // let info = ParticleEmitterInfo.create(level, new ResourceLocation('kubejs:lightning')).position(new Vec3d(0, 56, 0)).scale(1, 1, 1)
    // console.log(info.position())
    // $AAALevel.addParticle(level, true, info)

    // let tempSphere = new SphereModel()
    //     .setShellProperties(Block.getBlock('minecraft:glass').defaultBlockState(), 5, 1)
    // let tempSphere = new GeodeSphereModel()
    //     .addVein(Block.getBlock('minecraft:diamond_block').defaultBlockState(), 23, 'cloud')
    //     .setFillBlock(Block.getBlock('minecraft:glass').defaultBlockState())
    //     .setShellProperties(Block.getBlock('minecraft:glass').defaultBlockState(), 24, 1)
    // tempSphere.generateSphere(level, player.block.getPos().atY(100))

    // Ingredient.of('#minecraft:dirt').getStacks().forEach(stack => {
    //     console.log(stack)
    // })
})

// CreateWaypoint(player, pos, new Date().toLocaleString(), 0xFAED34)