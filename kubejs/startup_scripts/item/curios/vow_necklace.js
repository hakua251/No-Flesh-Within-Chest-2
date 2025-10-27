// priority: 1000
StartupEvents.registry('minecraft:item', event => {
    event.create('kubejs:vow_necklace', 'basic')
        .texture('kubejs:item/curios/world_relics_debris_1')
        .maxStackSize(1)
        .attachCapability(CuriosCapabilityBuilder.CURIOS.itemStack()
            .canEquip((item, ctx) => {
                const entity = ctx.entity()
                if (entity.isPlayer()) return true
                return false
            })
            .onEquip((itemFrom, ctx, itemTo) => {
                const entity = ctx.entity()
                if (!entity.isPlayer()) return
                let helper = $CoinHelper.of(entity)
                helper.setEnable(CoinType.of('vow_coin'), true)
            })
            .onUnequip((itemFrom, ctx, itemTo) => {
                const entity = ctx.entity()
                if (!entity.isPlayer()) return
                let helper = $CoinHelper.of(entity)
                helper.setEnable(CoinType.of('vow_coin'), false)
            })
        )
        .tag('curios:necklace')
})