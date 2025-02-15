// priority: 801
const OrganItemRightClickedStrategy = new OrganStrategyModel()
    .setInit(
        /** 
         * @param {any} customData
         * @param {Internal.ItemClickedEventJS} event
         */
        (customData, event) => {
        }
    )
    .setDefer(
        /**
         * @param {any} customData
         * @param {Internal.ItemClickedEventJS} event
         */
        (customData, event) => {
        }
    )


ItemEvents.rightClicked(event => {
    if (!event.player) return
    let customData = {}
    OrganItemRightClickedStrategy.run(GetEntityChestCavityInventory(event.player), [event], customData)
})

ServerEvents.tags('item', event => {
    event.add('kubejs:item_right_clicked', Object.keys(OrganItemRightClickedStrategy.strategyMap))
    event.add('kubejs:item_right_clicked_only', Object.keys(OrganItemRightClickedStrategy.onlyStrategyMap))
})

