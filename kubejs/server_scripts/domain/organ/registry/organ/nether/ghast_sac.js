// priority: 500
RegistryOrgan('kubejs:ghast_sac')
    .addScore('chestcavity:speed', 1)
    .addScore('chestcavity:breath_recovery', 1)

/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.NetworkEventJS} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function GhastSacKeyActive(customData, event, organItem, organIndex, slotType) {
    const player = event.player
    const level = event.level
    let playerFacing = Vec3dNormalize(player.getForward())
    let fireballEntity = new $LargeFireball(level, player, playerFacing.x(), playerFacing.y(), playerFacing.z(), 1)
    fireballEntity.setPosition(fireballEntity.getX(), player.getY(0.5) + 0.3, fireballEntity.getZ())
    level.addFreshEntity(fireballEntity)
    player.addItemCooldown(organItem, 20 * 3)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:ghast_sac')
        .addOnlyStrategy('key_active', GhastSacKeyActive)
)