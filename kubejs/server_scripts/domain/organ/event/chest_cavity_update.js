// priority: 801
/**
 * @typedef {Object} OrganChestCavityUpdateStrategyCustomData
 * @property {AttributeManagerModel} attackDamage
 * @property {AttributeManagerModel} maxHealth
 * @property {Internal.MpmPartData[]} mpmParts
 */

const OrganChestCavityUpdateStrategy = new OrganChestCavityUpdateStrategyModel()
    .setInit(
        /** 
         * @param {OrganChestCavityUpdateStrategyCustomData} customData
         * @param {Internal.EvaluateChestCavityJS} event
         */
        (customData, event) => {
            customData.mpmParts = []
            customData.attackDamage = new AttributeManagerModel(1)
            customData.maxHealth = new AttributeManagerModel(1)
        }
    )
    .setDefer(
        /**
         * @param {OrganChestCavityUpdateStrategyCustomData} customData
         * @param {Internal.EvaluateChestCavityJS} event
         */
        (customData, event) => {
        }
    )


const OrganTakeOffStrategy = new OrganTakeOffStrategyModel()
    .setInit(
        /** 
         * @param {OrganChestCavityUpdateStrategyCustomData} customData
         * @param {Internal.EvaluateChestCavityJS} event
         */
        (customData, event) => {
        }
    )
    .setDefer(
        /**
         * @param {OrganChestCavityUpdateStrategyCustomData} customData
         * @param {Internal.EvaluateChestCavityJS} event
         */
        (customData, event) => {
        }
    )


const SlotChestCavityUpdateStrategy = new SlotStrategyModel()
    .setInit(
        /** 
         * @param {OrganChestCavityUpdateStrategyCustomData} customData
         * @param {Internal.EvaluateChestCavityJS} event
         */
        (customData, event) => {
        }
    )
    .setDefer(
        /**
         * @param {OrganChestCavityUpdateStrategyCustomData} customData
         * @param {Internal.EvaluateChestCavityJS} event
         */
        (customData, event) => {
            customData.attackDamage.applyOnEntityByAttributeKey(event.entity, 'minecraft:generic.attack_damage', 'OrganAttackDamage')
            customData.maxHealth.applyOnEntityByAttributeKey(event.entity,'minecraft:generic.max_health', 'OrganMaxHealth')
        }
    )

ChestCavityEvents.evaluateChestCavity(event => {
    const { chestCavity, entity } = event
    let customData = {}
    if (entity.isAlive()) return
    OrganTakeOffStrategy.run(chestCavity, [event], customData)
    
    OrganChestCavityUpdateStrategy.run(chestCavity, [event], customData)
    SlotChestCavityUpdateStrategy.run(chestCavity, [event], customData)
})

ServerEvents.tags('item', event => {
    event.add('kubejs:chest_cavity_update', Object.keys(OrganChestCavityUpdateStrategy.strategyMap))
    event.add('kubejs:chest_cavity_update_only', Object.keys(OrganChestCavityUpdateStrategy.onlyStrategyMap))
})
