// priority: 500
const IceSpellPowerUpUUID = 'EAB770A2-DBBC-4C10-9A7D-92A04F216278'
const IceSpellPowerUpIdentifier = 'IceSpellPowerUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function IceSpellPowerUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:ice_spell_power')
    const attributeInstance = entity.getAttribute('irons_spellbooks:ice_spell_power')
    if (!attributeInstance) return
    attributeInstance.removeModifier(IceSpellPowerUpUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            IceSpellPowerUpUUID,
            IceSpellPowerUpIdentifier,
            organScoreValue * 0.03,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:ice_spell_power', IceSpellPowerUpdateOrganScore)
