// priority: 500
RegistryOrgan('kubejs:rose_quartz_muscle')
    .addScore('chestcavity:strength', 1.5)
    .addScore('chestcavity:nerves', -0.25)
    .addScore('kubejs:rosy', 0.5)

RegistryOrgan('kubejs:rose_quartz_heart')
    .addScore('chestcavity:health', 1.5)
    .addScore('chestcavity:nerves', -0.25)
    .addScore('kubejs:rosy', 0.5)

RegistryOrgan('kubejs:rose_quartz_liver')
    .addScore('chestcavity:detoxification', 1.5)
    .addScore('chestcavity:nerves', -0.25)
    .addScore('kubejs:rosy', 0.5)

RegistryOrgan('kubejs:rose_quartz_dialyzer')
    .addScore('chestcavity:filtration', 1.5)
    .addScore('chestcavity:nerves', -0.25)
    .addScore('kubejs:rosy', 0.5)

/** ============================================================== */

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function RoseQuartzMuscleChestCavityUpdate(customData, event, organItem, organIndex) {
    const chestCavity = event.chestCavity
    let rosyValue = chestCavity.getOrganScore('kubejs:rosy')
    customData.attackDamage.addAttributeModifier(rosyValue, 'addition', 'base')
}
OrganChestCavityUpdateStrategy.addStrategy('kubejs:rose_quartz_muscle', RoseQuartzMuscleChestCavityUpdate)

/** ============================================================== */

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function RoseQuartzHeartChestCavityUpdate(customData, event, organItem, organIndex) {
    const chestCavity = event.chestCavity
    let rosyValue = chestCavity.getOrganScore('kubejs:rosy')
    customData.maxHealth.addAttributeModifier(rosyValue, 'addition', 'base')
}
OrganChestCavityUpdateStrategy.addStrategy('kubejs:rose_quartz_heart', RoseQuartzHeartChestCavityUpdate)

/** ============================================================== */

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function RoseQuartzLiverChestCavityUpdate(customData, event, organItem, organIndex) {
    const chestCavity = event.chestCavity
    let rosyValue = chestCavity.getOrganScore('kubejs:rosy')
    customData.maxHealth.addAttributeModifier(rosyValue, 'addition', 'base')
}
OrganChestCavityUpdateStrategy.addStrategy('kubejs:rose_quartz_heart', RoseQuartzLiverChestCavityUpdate)

/** ============================================================== */