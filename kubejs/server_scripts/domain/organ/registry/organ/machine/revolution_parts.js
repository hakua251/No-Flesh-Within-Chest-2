// priority: 500
RegistryOrgan('kubejs:revolution_cable')
    .addScore('chestcavity:endurance', 1.5)
    .addScore('chestcavity:nerves', 1.5)

RegistryOrgan('kubejs:revolution_relay')
    .addScore('chestcavity:endurance', 0.5)
    .addScore('chestcavity:nerves', 0.5)

RegistryOrgan('kubejs:revolution_delay')
    .addScore('chestcavity:endurance', 0.5)
    .addScore('chestcavity:nerves', 0.5)



/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.EvaluateChestCavityJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function RevolutionCableChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    let machineCount = chestCavity.inventory.count('#kubejs:machine')
    let revolutionCount = chestCavity.inventory.count('#kubejs:revolution')
    customData.maxHealth.addAttributeModifier((machineCount + revolutionCount) * 2, 'addition', 'base')
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:revolution_cable')
        .addOnlyStrategy('chest_cavity_update', RevolutionCableChestCavityUpdate)
)



/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.EvaluateChestCavityJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function RevolutionRelayChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    let originValue = chestCavity.customEntityDataMap.getOrDefault('furnaceCoreRelay', 0)
    chestCavity.customEntityDataMap.put('furnaceCoreRelay', originValue + 1)
}
/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.EvaluateChestCavityJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function RevolutionRelayChestCavityUpdateOnly(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    chestCavity.customEntityDataMap.put('furnaceCoreRelay', 0)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:revolution_relay')
        .addStrategy('chest_cavity_update', RevolutionRelayChestCavityUpdate)
        .addOnlyStrategy('chest_cavity_update', RevolutionRelayChestCavityUpdateOnly)
)

/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.EvaluateChestCavityJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function RevolutionDelayChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    let originValue = chestCavity.customEntityDataMap.getOrDefault('burningHeartDelay', 0)
    chestCavity.customEntityDataMap.put('burningHeartDelay', originValue + 1)
}
/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.EvaluateChestCavityJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function RevolutionDelayChestCavityUpdateOnly(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    chestCavity.customEntityDataMap.put('burningHeartDelay', 0)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:revolution_delay')
        .addStrategy('chest_cavity_update', RevolutionDelayChestCavityUpdate)
        .addOnlyStrategy('chest_cavity_update', RevolutionDelayChestCavityUpdateOnly)
)
