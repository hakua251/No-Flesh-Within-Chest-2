// priority: 801
const OrganEntityLootStrategy = new OrganStrategyModel()
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
    context.addLootTypeModifier(LootType.ENTITY)
        .apply(event => {
            if (!event.killerEntity) return
            let customData = {}
            OrganEntityLootStrategy.run(GetEntityChestCavityInventory(event.killerEntity), [event], customData)
        })
})

ServerEvents.tags('item', event => {
    event.add('kubejs:entity_loot', Object.keys(OrganEntityLootStrategy.strategyMap))
    event.add('kubejs:entity_loot_only', Object.keys(OrganEntityLootStrategy.onlyStrategyMap))
})

