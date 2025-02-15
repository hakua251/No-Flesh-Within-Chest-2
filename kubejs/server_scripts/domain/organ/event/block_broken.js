// priority: 801
const OrganBlockBrokenStrategy = new OrganStrategyModel()
    .setInit(
        /** 
         * @param {any} customData
         * @param {Internal.BlockBrokenEventJS} event
         */
        (customData, event) => {
        }
    )
    .setDefer(
        /**
         * @param {any} customData
         * @param {Internal.BlockBrokenEventJS} event
         */
        (customData, event) => {
        }
    )


BlockEvents.broken(event => {
    let customData = {}
    OrganBlockBrokenStrategy.run(GetEntityChestCavityInventory(event.entity), [event], customData)
})

ServerEvents.tags('item', event => {
    event.add('kubejs:block_broken', Object.keys(OrganBlockBrokenStrategy.strategyMap))
    event.add('kubejs:block_broken_only', Object.keys(OrganBlockBrokenStrategy.onlyStrategyMap))
})

