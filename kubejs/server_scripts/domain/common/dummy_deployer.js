// priority: 500

ItemEvents.entityInteracted('kaleidoscope_cookery:kitchen_shovel', event => {
    const level = event.level
    const player = event.player
    const target = event.target
    const item = event.item
    if (target instanceof $LivingEntity) {
        if (player instanceof $DeployerFakePlayer) {
            // todo
            if (target.headArmorItem.is('tconstruct:cave_spider_head') || target.headArmorItem.is('tconstruct:spider_head')) {
                SpawnLootAtLocation(level, target.blockPosition(), [Item.of('minecraft:spider_eye')])
                DamageItem(item)
            }
        }
    }
})