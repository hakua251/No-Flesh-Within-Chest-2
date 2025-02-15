// priority: 801
const OrganEntityBeHurtStrategy = new OrganStrategyModel()
    .setInit(
        /** 
         * @param {any} customData
         * @param {Internal.LivingDamageEvent} event
         */
        (customData, event) => {
        }
    )
    .setDefer(
        /**
         * @param {any} customData
         * @param {Internal.LivingDamageEvent} event
         */
        (customData, event) => {
        }
    )


    /**
     * 
     * @param {Internal.LivingDamageEvent} event 
     */
function OrganEntityBeHurt(event, customData) {
    OrganEntityBeHurtStrategy.run(GetEntityChestCavityInventory(event.entity), [event], customData)
}

ServerEvents.tags('item', event => {
    event.add('kubejs:entity_be_hurt', Object.keys(OrganEntityBeHurtStrategy.strategyMap))
    event.add('kubejs:entity_be_hurt_only', Object.keys(OrganEntityBeHurtStrategy.onlyStrategyMap))
})

