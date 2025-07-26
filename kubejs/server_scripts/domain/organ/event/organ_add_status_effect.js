// priority: 999
const OrganAddStatusEffectEvent = new OrganEventModel('organ_add_status_effect')

ChestCavityEvents.organAddStatusEffect(event => {
    const entity = event.entity
    let customData = {}
    OrganAddStatusEffectEvent.run(entity, customData, [event])
})
