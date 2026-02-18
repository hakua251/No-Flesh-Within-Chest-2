// priority: 500
RegistryOrgan('kubejs:worm_neuron')
    .addScore('chestcavity:nerves', 1.5)
    .addScore('chestcavity:metabolism', 1)
    .addScore('chestcavity:endurance', -1)

/**
 * 
 * @param {number} maxValue 
 * @returns {number}
 */
function RandomTumorAttirbute(maxValue) {
    let randomRatio = FloorFix(Math.random(), 2) * FloorFix(Math.random(), 2)
    let value = Math.max(FloorFix(maxValue * randomRatio, 1), 0.1)
    return Math.random() < 0.3 ? -value : value
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OpenedEntityTickJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function WormNeuronEntityTick(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    const chestCavity = event.chestCavity
    if (entity.age % 1200 != 0) return

    // 随机两条属性
    let organData = new $CompoundTag()
    let attributeList = WormNeuronOrganDataWeightModel.getWeightRandomObjs(2)
    attributeList.forEach((attri) => {
        organData.putDouble(attri.name, RandomTumorAttirbute(attri.max))
    })

    // 随机一条潜在属性
    let potentialOrganData = new $CompoundTag()
    let potentialAttribute = WormNeuronPotentialOrganDataWeightModel.getWeightRandomObj()
    potentialOrganData.putDouble(potentialAttribute.name, RandomTumorAttirbute(potentialAttribute.max))

    let nbt = new $CompoundTag()
    // 故意预先存储，后续处理可以不依据该潜藏属性
    nbt.put('potentialOrganData', potentialOrganData)
    nbt.put('organData', organData)
    let canSetSlotList = []
    for (let i = 0; i < chestCavity.inventory.getContainerSize(); i++) {
        if (chestCavity.inventory.getItem(i).isEmpty()) {
            canSetSlotList.push(i)
        }
    }

    if (canSetSlotList.length == 0) {
        SetChestCavityOrgan(customData, chestCavity, Item.of('kubejs:malignant_neuron_tumor'), organIndex, slotType, true)
        return
    }
    let targetIndex = RandomGet(canSetSlotList)

    let targetSlotType = chestCavity.inventoryTypeData.getSlotType(targetIndex)
    SetChestCavityOrgan(customData, chestCavity, Item.of('kubejs:unformed_tumor', nbt), targetIndex, targetSlotType, true)
}




RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:worm_neuron')
        .addOnlyStrategy('entity_tick', WormNeuronEntityTick)
)