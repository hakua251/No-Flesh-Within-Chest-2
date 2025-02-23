// priority: 500

// todo 调试方法
ItemEvents.rightClicked('stick', event => {
    let player = event.player
    const x = 11
    const y = '-$screenH/2+49'
    player.paint({
        'effect_1': {
            'type': 'rectangle',
            'x': x,
            'y': y,
            'w': 8,
            'h': 8,
            'alignX': 'left',
            'alignY': 'bottom',
            'texture': 'kubejs:textures/mob_effect/flaring_heart.png',
            'visible': true

        }

    })
    player.paint({
        'effect_1_num': {
            'type': 'text',
            'x': x + 5,
            'y': '-$screenH/2+50',
            'text': `15555`,
            'alignX': 'left',
            'alignY': 'bottom',
            'visible': true,
            'scale': 0.4,
            'shadow': true,
            'color': 0xf5f5f5
        }
})
    // player.paint({
    //     '*': {
    //         remove : true
    //     }
    // })
})