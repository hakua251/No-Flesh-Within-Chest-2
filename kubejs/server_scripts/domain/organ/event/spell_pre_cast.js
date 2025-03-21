// priority: 500
const PlayerSpellPreCastEvent = new OrganEventModel('player_spell_pre_cast')

PlayerEvents.spellPreCast(event => {
    const player = event.player
    if (!player) return
    let customData = {}
    PlayerSpellPreCastEvent.run(player, customData, [event])
})

