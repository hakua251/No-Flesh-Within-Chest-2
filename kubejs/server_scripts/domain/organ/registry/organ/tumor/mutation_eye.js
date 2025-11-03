// priority: 500
RegistryOrgan('kubejs:mutation_eye')
    .addScore('chestcavity:nerves', 1)
    .addScore('chestcavity:buff_purging', 1)

// todo 概率食用器官后转变为另一个器官

/**
* @param {OrganEventCustomData} customData
* @param {Internal.OpenedEntityTickJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function MutationEyeEntityTick(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    const chestCavity = event.chestCavity
    const ccInv = chestCavity.inventory
    const invTypeData = chestCavity.inventoryTypeData
    const curRelativePosition = invTypeData.getSlotDefinition(organIndex).getRelativePosition()
    const curRelativePositionX = curRelativePosition.getX()
    const curRelativePositionY = curRelativePosition.getY()

    const interval = 40
    if (entity.age % interval != 0) return
    let totalScore = 0
    chestCavity.getOrganScores().forEach((key, value) => {
        totalScore = totalScore + value
    })
    let avgScore = totalScore / ccInv.countNonEmpty()


    let emptySlotList = []
    let minScore = totalScore
    let minScoreIndex = -1
    for (let [offsetX, offsetY] of FourDirectionOffset) {
        let slotDefinition = invTypeData.getRelativeSlotDefinition(curRelativePositionX + offsetX, curRelativePositionY + offsetY)
        if (!slotDefinition) continue
        let curIndex = slotDefinition.getId()

        let curItem = ccInv.getStackInSlot(curIndex)
        if (curItem.getId().toString() == 'kubejs:mutation_eye') continue
        if (curItem.isEmpty()) {
            emptySlotList.push(curIndex)
            continue
        }
        let organData = ChestCavityUtils.lookupOrgan(curItem, null)
        let organTotalScore = 0
        organData.organScores.forEach((key, value) => {
            organTotalScore = organTotalScore + value
        })
        if (organTotalScore > avgScore) continue
        if (organTotalScore < minScore) {
            minScore = organTotalScore
            minScoreIndex = curIndex
        }
    }
    let targetIndex = minScoreIndex
    if (targetIndex <= -1) {
        if (emptySlotList.length <= 0) return
        targetIndex = RandomGet(emptySlotList)
    }


    let targetSlotType = chestCavity.inventoryTypeData.getSlotType(targetIndex)
    SetChestCavityOrgan(customData, chestCavity, organItem.copy(), targetIndex, targetSlotType, true)
    RemoveChestCavityOrgan(customData, chestCavity, organIndex, slotType, true)
    if (entity instanceof $ServerPlayer) {
        entity.addItemCooldown('kubejs:mutation_eye', interval)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:mutation_eye')
        .addStrategy('entity_tick', MutationEyeEntityTick)
)