// priority: 998
/**
 * @param {number} scale 
 */
function ArenaHandleRewardMoreLootModifierGenerator(scale) {
    return /**@param {any} customData @param {Internal.AltarArenaHandleRewardJS} event**/(customData, event) => {
        let lootList = event.getLootItems()
        lootList.forEach(lootItem => {
            if (lootItem instanceof $Item) {
                lootItem.setCount(Math.floor(lootItem.getCount() * scale))
            }
        })
    }
}

RegistryArenaHandleRewardModifierStrategy('moreLoot_1', ArenaHandleRewardMoreLootModifierGenerator(1))
RegistryArenaHandleRewardModifierStrategy('moreLoot_2', ArenaHandleRewardMoreLootModifierGenerator(2))
RegistryArenaHandleRewardModifierStrategy('moreLoot_3', ArenaHandleRewardMoreLootModifierGenerator(3))


