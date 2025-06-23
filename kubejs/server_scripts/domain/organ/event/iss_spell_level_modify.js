// priority: 999
const ISSSpellLevelModifyEvent = new OrganEventModel('iss_spell_level_modify')

/**
 * 法术等级修正
 */
NativeEvents.onEvent($ModifySpellLevelEvent, /** @param {Internal.ModifySpellLevelEvent} event */ event => {
    const entity = event.entity
    if (!entity.isAlive()) return
    let customData = {}
    OrganModifySpellLevel(event, customData)
})

/**
 * 法术等级修正
 * @param {Internal.ModifySpellLevelEvent} event 
 * @param {OrganEventCustomData} customData 
 */
function OrganModifySpellLevel(event, customData) {
    const entity = event.entity
    ISSSpellLevelModifyEvent.run(entity, customData, [event])
}
