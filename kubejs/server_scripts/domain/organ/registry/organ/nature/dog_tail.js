// priority: 500
RegistryOrgan('kubejs:dog_tail')
    .addScore('kubejs:extreme_fitness', 1)
    .addScore('chestcavity:strength', -1)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OpenedEntityTickJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function DogTailEntityTick(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    if (entity.age % 200 != 0) return
    const chestCavity = entity.chestCavityInstance
    const ccInv = chestCavity.inventory
    const invTypeData = chestCavity.getInventoryTypeData()
    const curRelativePosition = invTypeData.getSlotDefinition(organIndex).getRelativePosition()
    const curRelativePositionX = curRelativePosition.getX()
    const curRelativePositionY = curRelativePosition.getY()

    for (let [offsetX, offsetY] of EightDirectionOffset) {
        let slotDefinition = invTypeData.getRelativeSlotDefinition(curRelativePositionX + offsetX, curRelativePositionY + offsetY)
        if (!slotDefinition) continue
        let curItem = ccInv.getStackInSlot(slotDefinition.getId())
        if (curItem.isEmpty() || curItem.id != 'kubejs:living_controller') continue
        let targetLiving = GetRemoteControlTarget(event.level, curItem)
        if (!targetLiving) return
        if (!(targetLiving instanceof $PathfinderMob)) continue
        targetLiving.potionEffects.add('minecraft:absorption', 20 * 30, 2)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:dog_tail')
        .addOnlyStrategy('entity_tick', DogTailEntityTick)
)
