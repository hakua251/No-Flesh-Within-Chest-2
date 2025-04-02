// priority: 900
StartupEvents.registry('block', event => {
    event.create('kubejs:dungeon_obelisk')
        .property(BlockProperties.DOUBLE_BLOCK_HALF)
        .defaultState(defaultState => {
            defaultState.set(BlockProperties.DOUBLE_BLOCK_HALF, 'lower')
            defaultState.set(BlockProperties.CANDLES, 1)
        })
        .item(item => {
            // item.texture()
        })
        .blockEntity(blockEntityInfo => {
        })
        .defaultTranslucent()
        .unbreakable()
})
StartupEvents.registry('')