// priority: 500
RegistryOrgan('kubejs:candy_stomach')
    .addScore('chestcavity:nutrition', 2)
    .addScore('chestcavity:defense', -1)

/**
* @param {OrganEventCustomData} customData
* @param {Internal.SpellOnCastEventJS} event 
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function CandyStomachPlayerSpellCast(customData, event, organItem, organIndex, slotType) {
    if (event.schoolType.getId().toString() != 'kubejs:candy') return
    const nutritionOrganScore = chestCavity.getOrganScore('chestcavity:nutrition')
    let increaseLevel = Clamp(Math.floor(nutritionOrganScore / 2), 1, 10)
    event.setSpellLevel(event.getSpellLevel() + increaseLevel)
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:candy_stomach')
        .addOnlyStrategy('player_spell_cast', CandyStomachPlayerSpellCast)
)