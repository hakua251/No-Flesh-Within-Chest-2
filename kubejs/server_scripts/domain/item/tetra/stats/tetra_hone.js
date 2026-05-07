// priority: 500
BlockEvents.rightClicked('minecraft:grindstone', event => {
    const player = event.player
    const level = event.level
    const stack = event.item
    /**@type {Internal.ModularItem} */
    const item = stack.getItem()
    if (!item || !player) return
    let damageValue = stack.getDamageValue()
    let maxDamage = stack.getMaxDamage()
    if (damageValue + 20 >= maxDamage) return
    if (player.playingAnimation) return
    if (!TetraJSUtils.isModularItem(item)) return
    if (!item.canGainHoneProgress(stack) || $IModularItem.isHoneable(stack)) return
    item.tickHoningProgression(player, stack, 50)
    stack.setDamageValue(damageValue + 50)
    level.playSound(null, player.getX(), player.getY(), player.getZ(), 'minecraft:block.grindstone.use', player.getSoundSource(), 1, 1)
    if (player instanceof $DeployerFakePlayer) return
    player.triggerAnimation('kubejs:grindstone_hone_animation', 0.5, 'linear', true, true)
})