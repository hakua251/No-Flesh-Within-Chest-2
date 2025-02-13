// priority: 1000

/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @returns {Internal.ChestCavityInventory}
 */
function GetPlayerChestCavityInventory(player) {
    return player.chestCavityInstance.inventory
}