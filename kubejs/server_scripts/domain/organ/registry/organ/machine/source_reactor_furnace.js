// priority: 500
RegistryOrgan('kubejs:source_reactor_furnace')
    .addScore('chestcavity:health', 1)
    .addScore('kubejs:magic_capacity', 1)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OpenedEntityTickJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function SourceReactorFurnaceEntityTick(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    const ccInv = chestCavity.inventory
    const invTypeData = chestCavity.getInventoryTypeData()
    let aroundRelativeSlots = GetDirectionRelativeSlotByParam(invTypeData, organIndex, FourDirectionOffset)
    for (let slotDefinition of aroundRelativeSlots) {
        let curItem = ccInv.getStackInSlot(slotDefinition.getId())
        if (curItem.isEmpty()) continue
        if (curItem.hasTag('tconstruct:tanks') && curItem.hasNBT()) {
            let nbt = curItem.getNbt()
            if (!nbt.contains('tank')) continue
            let tankNbt = nbt.getCompound('tank')
            let fluidName = tankNbt.getString('FluidName')
            let fluidAmount = tankNbt.getInt('Amount')
            if (fluidAmount <= 0) continue
            switch (fluidName) {
                case 'minecraft:lava':

                    break
                case 'tconstruct:blazing_blood':

                    break
            }
        }
    }
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:source_reactor_furnace')
        .addOnlyStrategy('entity_tick', SourceReactorFurnaceEntityTick)
)

