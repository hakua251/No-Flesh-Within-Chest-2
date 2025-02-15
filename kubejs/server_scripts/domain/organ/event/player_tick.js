// priority: 801
const OrganPlayerTickStrategy = new OrganStrategyModel()
    .setInit(
        /** 
         * @param {any} customData
         * @param {Internal.SimplePlayerEventJS} event
         */
        (customData, event) => {
        }
    )
    .setDefer(
        /**
         * @param {any} customData
         * @param {Internal.SimplePlayerEventJS} event
         */
        (customData, event) => {
        }
    )


PlayerEvents.tick(event => {
    if (!event.player) return
    let customData = {}
    OrganPlayerTickStrategy.run(GetEntityChestCavityInventory(event.player), [event], customData)
})

ServerEvents.tags('item', event => {
    event.add('kubejs:player_tick', Object.keys(OrganPlayerTickStrategy.strategyMap))
    event.add('kubejs:player_tick_only', Object.keys(OrganPlayerTickStrategy.onlyStrategyMap))
})
