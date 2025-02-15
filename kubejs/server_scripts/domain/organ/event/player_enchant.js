// priority: 801
const OrganPlayerEnchantStrategy = new OrganStrategyModel()
    .setInit(
        /** 
         * @param {any} customData
         * @param {Internal.LootContextJS} event
         */
        (customData, event) => {
        }
    )
    .setDefer(
        /**
         * @param {any} customData
         * @param {Internal.LootContextJS} event
         */
        (customData, event) => {
        }
    )

MoreJSEvents.enchantmentTableChanged(event => {
    if (!event.player) return
    let customData = {}
    OrganPlayerEnchantStrategy.run(GetEntityChestCavityInventory(event.player), [event], customData)
})

ServerEvents.tags('item', event => {
    event.add('kubejs:player_enchant', Object.keys(OrganPlayerEnchantStrategy.strategyMap))
    event.add('kubejs:player_enchant_only', Object.keys(OrganPlayerEnchantStrategy.onlyStrategyMap))
})

