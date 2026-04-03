// priority: 500
$CustomRequirement.registerCustomCEFunction('blood_inspiration', ctx => {
    const level = ctx.world()
    const pos = ctx.pos()
    if (level.isClientSide()) return false

    let villagers = GetEntityWithinRadius(level, pos, 8, (pLevel, pEntity) => {
        return pEntity.type == 'minecraft:villager'
    })
    if (villagers.length >= 3) {
        for (let i = 0; i < 3; i++) {
            villagers[i].kill()
        }
        return true
    }
    return false
})