// priority: 801
const OrganEntityDoDamageStrategy = new OrganStrategyModel()
    .setInit(
        /** 
         * @param {any} customData
         * @param {Internal.LivingHurtEvent} event
         */
        (customData, event) => {
        }
    )
    .setDefer(
        /**
         * @param {any} customData
         * @param {Internal.LivingHurtEvent} event
         */
        (customData, event) => {
        }
    )


    /**
     * 
     * @param {Internal.LivingHurtEvent} event 
     */
function OrganEntityDoDamage(event, customData) {
    OrganEntityDoDamageStrategy.run(GetEntityChestCavityInventory(event.source.actual), [event], customData)
}

ServerEvents.tags('item', event => {
    event.add('kubejs:entity_do_damage', Object.keys(OrganEntityDoDamageStrategy.strategyMap))
    event.add('kubejs:entity_do_damage_only', Object.keys(OrganEntityDoDamageStrategy.onlyStrategyMap))
})
