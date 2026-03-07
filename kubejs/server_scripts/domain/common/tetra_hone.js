// priority: 500
BlockEvents.rightClicked('minecraft:grindstone', event => {
    const player = event.player
    const level = event.level

    const item = event.item
    /**@type {Internal.ModularItem} */
    const modularItem = item.getItem()
    if (!item || !player) return
    let damageValue = item.getDamageValue()
    let maxDamage = item.getMaxDamage()
    if (damageValue + 20 >= maxDamage) return
    if (player.playingAnimation) return
    if (!TetraJSUtils.isModularItem(modularItem)) return
    if (!modularItem.canGainHoneProgress(item) || $IModularItem.isHoneable(item)) return
    player.triggerAnimation('kubejs:cuttinggem.animation', 0.5, 'linear', true, false)
    level.playSound(null, player.getX(), player.getY(), player.getZ(), 'minecraft:block.grindstone.use', player.getSoundSource(), 1, 1)
    modularItem.tickHoningProgression(player, item, 20)
    item.setDamageValue(damageValue + 20)
})