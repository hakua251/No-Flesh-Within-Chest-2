// priority: 500
PlayerEvents.loggedIn(event => {
    const player = event.player
    player.paint({
        'darkest_wave_bar_background': {
            type: 'rectangle',
            x: 11,
            y: '-$screenH/2+49',
            w: 11,
            h: 101,
            alignX: 'left',
            alignY: 'bottom',
            texture: 'kubejs:textures/gui/darkest_wave_bar_background.png',
            visible: false
        },
        'darkest_wave_bar_overlay': {
            type: 'rectangle',
            x: 11,
            y: '-$screenH/2+49',
            v0: 1,
            v1: 1,
            w: 11,
            h: 101,
            alignX: 'left',
            alignY: 'bottom',
            texture: 'kubejs:textures/gui/darkest_wave_bar_overlay.png',
            visible: false
        }
    })

    if (level.dimension == 'infinity:darkest_flat') {
        SetDarkestWaveBarVisible(player, true)
        UpdateDarkestWaveBar(player, event.server.persistentData.getLong('darkest_wave_counter'))
    } else {
        SetDarkestWaveBarVisible(player, false)
    }
})

NativeEvents.onEvent($PlayerChangedDimensionEvent, /** @param {Internal.PlayerEvent$PlayerChangedDimensionEvent} event */ event => {
    const player = event.getEntity()
    if (!(player instanceof $ServerPlayer)) return
    const toDim = event.getTo()
    const fromDim = event.getFrom()
    if (toDim.namespace == 'infinity' && toDim.path == 'darkest_flat') {
        SetDarkestWaveBarVisible(player, true)
        UpdateDarkestWaveBar(player, player.server.persistentData.getLong('darkest_wave_counter'))
        return
    }
    if (fromDim.namespace == 'infinity' && fromDim.path == 'darkest_flat') {
        SetDarkestWaveBarVisible(player, false)
        return
    }
})

PlayerEvents.respawned(event => {
    const player = event.player
    const level = event.level
    if (level.dimension == 'infinity:darkest_flat') {
        SetDarkestWaveBarVisible(player, true)
        UpdateDarkestWaveBar(player, event.server.persistentData.getLong('darkest_wave_counter'))
    } else {
        SetDarkestWaveBarVisible(player, false)
    }
})

/**
 * @param {Internal.ServerPlayer} player 
 * @param {boolean} visible 
 */
function SetDarkestWaveBarVisible(player, visible) {
    player.paint({
        'darkest_wave_bar_background': {
            visible: visible
        },
        'darkest_wave_bar_overlay': {
            visible: visible
        }
    })
}

/**
 * @param {Internal.ServerPlayer} player 
 * @param {number} waveCount 
 */
function UpdateDarkestWaveBar(player, waveCount) {
    const waveCountPercent = Clamp(waveCount / 100, 0, 1)
    player.tell(waveCountPercent)
    player.paint({
        'darkest_wave_bar_overlay': {
            v0: 1 - waveCountPercent,
            h: 101 * waveCountPercent,
        }
    })
}


// (event => {
//     const player = event.player
//         player.paint({
//         'darkest_wave_bar_background': {
//             visible: false
//         },
//         'darkest_wave_bar_overlay': {
//             type: 'rectangle',
//             x: 11,
//             y: '-$screenH/2+49',
//             v0: 1 - waveCountPercent,
//             v1: 1,
//             w: 11,
//             h: 101 * waveCountPercent,
//             alignX: 'left',
//             alignY: 'bottom',
//             texture: 'kubejs:textures/gui/darkest_wave_ba_overlay.png',
//             visible: false
//         }
//     })
// })