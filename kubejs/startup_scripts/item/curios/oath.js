// priority: 1000
StartupEvents.registry('minecraft:item', event => {
    event.create('kubejs:eternal_oath', 'basic')
        .texture('kubejs:item/curios/eternal_oath')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip(() => true)
            .onEquip((itemFrom, ctx, itemTo) => {
                /**@type {Internal.ServerPlayer} */
                const entity = ctx.entity()
                const level = entity.level
                if (level.isClientSide()) return
                if (!entity.isPlayer()) return
                entity.setKeepInventory(true)
            })
            .onUnequip((itemFrom, ctx, itemTo) => {
                /**@type {Internal.ServerPlayer} */
                const entity = ctx.entity()
                const level = entity.level
                if (level.isClientSide()) return
                if (!entity.isPlayer()) return
                entity.setKeepInventory(false)
            })
            .canUnequip(() => true)
        )
        .tag('curios:oath')
})