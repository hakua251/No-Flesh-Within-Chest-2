// priority: 500
$CustomRequirement.registerCustomCEFunction('effect_inspiration', ctx => {
    const level = ctx.world()
    const player = ctx.player()
    if (level.isClientSide()) return false
    return player.getActiveEffects().size() >= 5
})