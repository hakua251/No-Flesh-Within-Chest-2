// priority: 500
const CharmingTradePriceDownUUID = '9F8235D0-363F-444D-88F8-E282B97EE05E'
const CharmingTradePriceDownIdentifier = 'CharmingTradePriceDown'
/**
 * 
 * @param {Internal.UpdateOrganScoreJS} event 
 */
function CharmingUpdateOrganScore(event) {
    const entity = event.entity
    const organScoreValue = event.chestCavity.getOrganScore('kubejs:charming')
    const attributeInstance = entity.getAttribute('tinkersjewelry:trade')
    if (!attributeInstance) return
    attributeInstance.removeModifier(CharmingTradePriceDownUUID)
    if (organScoreValue == 0) return
    attributeInstance.addPermanentModifier(
        new $AttributeModifier(
            CharmingTradePriceDownUUID,
            CharmingTradePriceDownIdentifier,
            organScoreValue,
            $Operation.ADDITION)
    )
}

RegistryOrganScoreAttribute('kubejs:charming', CharmingUpdateOrganScore)