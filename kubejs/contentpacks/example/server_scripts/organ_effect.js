// priority: 500
RegistryOrgan('example:test')
    .addScore('chestcavity:defense', 2)

/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.NetworkEventJS} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function TestKeyActive(customData, event, organItem, organIndex, slotType) {
    const player = event.player
    player.tell(123)
    player.addItemCooldown(organItem, 20 * 2)
}

RegistryOrganStrategy(
    new OrganStrategyModel('example:test')
        .addOnlyStrategy('key_active', TestKeyActive)
)