// priority: 801
/**
 * @typedef {Object} OrganChestCavityUpdateStrategyCustomData
 * @property {AttributeManagerModel} attackDamage
 */

const OrganChestCavityUpdateStrategy = new OrganStrategyModel()
    .setInit(
        /** 
         * @param {OrganChestCavityUpdateStrategyCustomData} customData
         * @param {Internal.EvaluateChestCavityJS} event
         */
        (customData, event) => {
            customData.attackDamage = new AttributeManagerModel(1)
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
        }
    )

ChestCavityEvents.evaluateChestCavity(event => {
    const { chestCavity } = event
    let customData = {}
    let ccInv = chestCavity.inventory
    OrganTakeOffStrategy.run(ccInv, chestCavity.oldInventory, [event], customData)
    OrganChestCavityUpdateStrategy.run(ccInv, [event], customData)
    SlotChestCavityUpdateStrategy.run(chestCavity, [event], customData)
})

ServerEvents.tags('item', event => {
    event.add('kubejs:chest_cavity_update', Object.keys(OrganChestCavityUpdateStrategy.strategyMap))
    event.add('kubejs:chest_cavity_update_only', Object.keys(OrganChestCavityUpdateStrategy.onlyStrategyMap))
})
