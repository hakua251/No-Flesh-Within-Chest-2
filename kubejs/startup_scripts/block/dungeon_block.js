// priority: 900
global.BlockProperties.OBELISK_STATE = $IntegerProperty.create('obelisks_state', 0, 15)
StartupEvents.registry('block', event => {
    event.create('kubejs:dungeon_obelisk')
        .property(BlockProperties.DOUBLE_BLOCK_HALF)
        .property(global.BlockProperties.OBELISK_STATE)
        .defaultState(defaultState => {
            defaultState.set(BlockProperties.DOUBLE_BLOCK_HALF, 'lower')
            defaultState.set(global.BlockProperties.OBELISK_STATE, 0)
        })
        .item(item => {
            // item.texture()
        })
        .blockEntity(blockEntityInfo => {
        })
        .defaultTranslucent()
        .unbreakable()
})