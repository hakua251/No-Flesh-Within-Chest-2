// priority: 999
/**
 * 
 * @param {Internal.PathfinderMob} entity 
 */
function BloodLustGoal(entity) {
    entity.goalSelector.addGoal(0, new $CustomGoal(
        'ore_extraction',
        entity,
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 何时能够使用
            return true
        },
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 能否继续使用 
            return true
        },
        true, // 是否允许中断
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 开启时执行
        },
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // 停止时执行
        },
        false, // 是否每个tick都需要更新
        /** @param {Internal.PathfinderMob} mob **/ mob => {
            // tick
            let selectBlock = FindNearestBlock(mob, 5, 1, 0, (curBlock) => {
                if (curBlock.blockState.is('minecraft:stone')) {
                    return true
                }
            })
            if (!selectBlock) return
            let curPos = mob.blockPosition()
            let targetPos = selectBlock.getPos()
            let dist = curPos.distSqr(targetPos)
            if (dist <= 1.5) {
                mob.level.setBlockAndUpdate(targetPos, Block.getBlock('minecraft:coal_ore').defaultBlockState())
            } else {
                mob.navigation.moveTo(targetPos.x, targetPos.y, targetPos.z, 1)
            }
        },
    ))
}