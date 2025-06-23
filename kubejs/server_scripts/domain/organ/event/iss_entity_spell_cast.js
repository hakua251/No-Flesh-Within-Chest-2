// priority: 999
const ISSEntitySpellCastEvent = new OrganEventModel('iss_entity_spell_cast')

EntityEvents.spellOnCast(event => {
    const entity = event.entity
    if (!entity) return
    let customData = {}
    ISSEntitySpellCastEvent.run(entity, customData, [event])
})