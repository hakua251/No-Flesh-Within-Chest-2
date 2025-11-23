// priority: 500
TConJSEvents.modifierRegistry(event => {
    event.createNew('mineral_fragment', builder => {
        builder.processLoot((toolView, lvl, lootList, context) => {
            const blockState = context.getParamOrNull($LootContextParams.BLOCK_STATE)
            if (!blockState) return
            if (blockState.is('minecraft:stone') || blockState.is('minecraft:deepslate')) {
                let random = Math.random()
                if (random < 0.01 * lvl) {
                    let itemRandom = Math.random()
                    if (itemRandom < 0.333) {
                        lootList.push(Item.of('minecraft:raw_iron'))
                    } else if (itemRandom < 0.666) {
                        lootList.push(Item.of('minecraft:raw_copper'))
                    } else {
                        lootList.push(Item.of('minecraft:raw_gold'))
                    }
                }
            }
        })
    })
})