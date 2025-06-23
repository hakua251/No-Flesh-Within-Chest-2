// priority: 500
NetworkEvents.dataReceived('iss_spell_selection_init', event => {
    const player = event.player
    InitClientISSSpellData(player)
})