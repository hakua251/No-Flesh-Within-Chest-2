// priority: 500
/**
 * 根据目视获取结构，并且记录结构信息到相纸上
 * 之所以不使用Exposure自身所包含的Structures原因为：列表不容易被FTBQ检测
 * 采用aimStructure可以通过NBT Weak Filter来进行匹配
 */
ExposureEvents.modifyFrameData(event => {
    const level = event.level
    const player = event.player
    let ray = player.rayTrace(32)
    let hitPos = ConvertVec3d2BlockPos(ray.hit)
    let key = IsInAnySturcture(level, hitPos)
    if (!key) return
    let frameData = event.getFrame()
    frameData.putString('aimStructure', key.location().toString())
})

/**
 * 允许用户在没有胶卷的情况下触发快门动画
 */
ExposureEvents.shutterOpening(event => {
    const level = event.level
    const item = event.cameraStack
    let nbt = new $CompoundTag()
    let shutterSpeed = 60
    if (item.hasNBT()) {
        nbt = item.getNbt()
        if (nbt.contains('ShutterSpeed')) {
            shutterSpeed = parseInt(nbt.getString('ShutterSpeed'))
        }
    }
    let shutterTicks = Math.max(shutterSpeed * 20 / 1000, 1)
    nbt.putBoolean('ShutterOpen', true)
    nbt.putInt("ShutterTicks", shutterTicks)
    nbt.putLong("ShutterCloseTimestamp", level.getTime() + shutterTicks)
    item.setNbt(nbt)
})