// priority: 500
RegistryOrgan('kubejs:source_resonator')
    .addScore('kubejs:magic_capacity', 1)
    .addScore('chestcavity:luck', 1)
// todo 回归测试
/**
* @param {OrganEventCustomData} customData
* @param {Internal.OpenedEntityTickJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function SourceResonatorEntityTick(customData, event, organItem, organIndex, slotType) {
    /**@type {Internal.ServerPlayer} */
    const entity = event.entity
    if (!entity.isPlayer()) return
    const chestCavity = event.chestCavity
    let magicData = entity.getMagicData()
    let curMana = magicData.getMana()
    if (curMana <= 10) return
    let damageValue = curMana / 10 + organItem.getDamageValue()
    let maxDamageValue = organItem.getMaxDamageValue()
    if (damageValue >= maxDamageValue) {
        SetChestCavityOrgan(customData, chestCavity, Item.of('kubejs:source_focus_crystal'), organIndex, slotType, true)
    } else {
        organItem.setDamageValue(damageValue)
    }
    magicData.setMana(0)
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:source_resonator')
        .addOnlyStrategy('entity_tick', SourceResonatorEntityTick)
)

