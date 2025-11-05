// priority: 500
TConJSEvents.modifierRegistry(event => {
    event.createNew('dissolve_stone', builder => {
        builder.processLoot((toolView, lvl, lootList, context) => {
            const blockState = context.getParamOrNull($LootContextParams.BLOCK_STATE)
            if (!blockState) return
            if (blockState.is('minecraft:stone') || blockState.is('minecraft:deepslate')) {
                lootList.clear()
                let random = Math.random()
                if (random < 0.005 * lvl) {
                    lootList.push(Item.of('kubejs:clear_crystal'))
                } else if (random < 0.08 * lvl) {
                    lootList.push(Item.of('minecraft:diamond'))
                }
            }
        })
    })
})