// priority: 500
const FireSpellPowerUpUUID = '54D02CE4-E156-4FD0-97C6-767DDAE8E6B6'
const FireSpellPowerUpIdentifier = 'FireSpellPowerUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function FireSpellPowerUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:fire_spell_power')
    const attributeInstance = entity.getAttribute('irons_spellbooks:fire_spell_power')
    if (!attributeInstance) return
    attributeInstance.removeModifier(FireSpellPowerUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            FireSpellPowerUpUUID,
            FireSpellPowerUpIdentifier,
            organScoreValue * 0.03,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:fire_spell_power', FireSpellPowerUpdateOrganScore)
