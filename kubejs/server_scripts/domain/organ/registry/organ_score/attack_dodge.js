// priority: 500
const AttackDodgeDodgeChanceUpUUID = '1318AAC8-AF51-4087-870F-D5C8CB42AA45'
const AttackDodgeDodgeChanceUpIdentifier = 'AttackDodgeDodgeChanceUp'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function AttackDodgeUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:attack_dodge')
    const attributeInstance = entity.getAttribute('attributeslib:dodge_chance')
    if (!attributeInstance) return
    attributeInstance.removeModifier(AttackDodgeDodgeChanceUpUUID)
    if (organScoreValue <= 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            AttackDodgeDodgeChanceUpUUID,
            AttackDodgeDodgeChanceUpIdentifier,
            organScoreValue / 100 * 3,
            $Operation.MULTIPLY_BASE)
    )
}

