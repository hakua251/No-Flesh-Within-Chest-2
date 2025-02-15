// priority: 801
const OrganChestLootStrategy = new OrganStrategyModel()
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


LootJS.modifiers(context => {
    context.addLootTypeModifier(LootType.CHEST)
        .apply(event => {
            if (!event.player) return
            let customData = {}
            OrganChestLootStrategy.run(GetEntityChestCavityInventory(event.player), [event], customData)
        })
})

ServerEvents.tags('item', event => {
    event.add('kubejs:chest_loot', Object.keys(OrganChestLootStrategy.strategyMap))
    event.add('kubejs:chest_loot_only', Object.keys(OrganChestLootStrategy.onlyStrategyMap))
})

