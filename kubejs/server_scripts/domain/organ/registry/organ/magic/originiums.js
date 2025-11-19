// priority: 500
RegistryOrgan('kubejs:originiums')
    .addScore('chestcavity:health', -1)
    .addScore('chestcavity:nerves', 1.5)


/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.SpellOnCastEventJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function OriginiumsPlayerSpellCast(customData, event, organItem, organIndex, slotType) {
    const maxDamage = organItem.getMaxDamage()
    const curDamage = organItem.getDamageValue()
    if (curDamage == 1) CommonDingNotice(event.level, event.player)
    const entity = event.entity
    const chestCavity = entity.chestCavityInstance
    if (maxDamage - curDamage < maxDamage) {
        organItem.setDamageValue(curDamage - 1)
        if (entity instanceof $ServerPlayer) {
            let organEffect = new OragnEffectModel(organItem).setPriority(organIndex).setCustomText((maxDamage - curDamage + 1).toFixed(0))
            SetOrganEffect(chestCavity, organEffect)
        }
        return
    }
    event.setSpellLevel(event.getSpellLevel() + 3)
    organItem.setDamageValue(maxDamage)
    if (entity instanceof $ServerPlayer) {
        let organEffect = new OragnEffectModel(organItem).setPriority(organIndex).setCustomText('0')
        SetOrganEffect(chestCavity, organEffect)
    }
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function OriginiumsTakeOff(customData, event, organItem, organIndex, slotType) {
    const { entity, chestCavity } = event
    if (entity instanceof $ServerPlayer) {
        RemoveOrganEffect(chestCavity, 'kubejs:originiums')
    }
}



RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:originiums')
        .addOnlyStrategy('iss_player_spell_cast', OriginiumsPlayerSpellCast)
        .addOnlyStrategy('organ_take_off', OriginiumsTakeOff)
)