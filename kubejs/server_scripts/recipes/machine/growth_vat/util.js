// priority: 501
/**
 * 未成型肿瘤生长逻辑
 * @param {CustomMachine} machine 
 * @param {ItemStack} item 
 * @param {String} slotId 
 */
function UnformedTumorGrowth(machine, item, slotId) {
    if (!item.is('kubejs:unformed_tumor')) return
    let unformedTumorNbt = item.getOrCreateTag()
    let tumorNbt = new $CompoundTag()
    let organData = new $CompoundTag()
    if (unformedTumorNbt.contains('organData')) {
        organData = organData.merge(unformedTumorNbt.getCompound('organData'))
    }
    if (unformedTumorNbt.contains('potentialOrganData')) {
        organData = organData.merge(unformedTumorNbt.getCompound('potentialOrganData'))
    }
    tumorNbt.put('organData', organData)
    machine.setItemStored(slotId, Item.of('kubejs:tumor', tumorNbt))
}

/**
 * 
 * @param {CustomMachine} machine 
 * @param {Internal.FluidStackJS} fluid 
 * @param {String} slotId 
 */
function SpawnUnformedTumor(machine, fluid, slotId) {
    let fluidId = String(fluid.id)
    if (!UnformedTumorFluidConfigMap.has(fluidId)) return

    let organData = new $CompoundTag()
    let organDataConfig = UnformedTumorFluidConfigMap.get(fluidId)
    organDataConfig.getOrganDataAttri().forEach((attri) => {
        organData.putDouble(attri.name, RandomTumorAttirbute(attri.max))
    })

    let potentialOrganData = new $CompoundTag()
    organDataConfig.getPotentialOrganDataAttri().forEach((attri) => {
        potentialOrganData.putDouble(attri.name, RandomTumorAttirbute(attri.max))
    })

    let nbt = new $CompoundTag()
    nbt.put('potentialOrganData', potentialOrganData)
    nbt.put('organData', organData)

    machine.setItemStored(slotId, Item.of('kubejs:unformed_tumor', nbt))
}