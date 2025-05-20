// priority: 999
const EntitySpellCastEvent = new OrganEventModel('entity_spell_cast')

EntityEvents.spellOnCast(event => {
    const entity = event.entity
    if (!entity) return
    let customData = {}
    EntitySpellCastEvent.run(entity, customData, [event])
})