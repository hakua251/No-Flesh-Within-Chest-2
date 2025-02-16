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
    .addScore('kubejs:rosy', 1)

const RoseMuscleAttackUp = UUID.fromString('EF4EFB50-5CCE-43CC-AF0F-96C9226413C9')
/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function RoseMuscleEntityChestCavityUpdate(customData, event, organItem, organIndex) {
    /**@type {Internal.LivingEntity} */
    const entity = event.entity
    const chestCavity = event.chestCavity
    if (!entity.isLiving()) return
    let rosyValue = chestCavity.getOrganScore('kubejs:rosy')
    customData.attackDamage.addAttributeModifier(rosyValue, 'addition', 'base')
}
OrganChestCavityUpdateStrategy.addStrategy('kubejs:rose_quartz_muscle', RoseMuscleEntityChestCavityUpdate)