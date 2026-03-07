// priority: 500
EntityEvents.spawned('minecraft:lightning_bolt', event => {
   const entity = event.entity
   const level = event.level
   const pos = entity.blockPosition()
   let nearbyItemEntities = GetItemEntityWithinRadius(level, pos, 3, () => true)
   let brassIngotCount = 0
   let amethystShardCount = 0
   nearbyItemEntities.forEach(itemEntity => {
      if (itemEntity.getItem().is('create:brass_ingot')) {
         brassIngotCount += itemEntity.getItem().getCount()
         itemEntity.discard()
         return
      }
      if (itemEntity.getItem().is('minecraft:amethyst_shard')) {
         amethystShardCount += itemEntity.getItem().getCount()
         itemEntity.discard()
         return
      }
      if (itemEntity.getItem().is('tetra:thermal_cell')) {
         itemEntity.discard()
         SpawnItemEntityWithMovement(level, pos, Item.of('tetra:thermal_cell', 1), new Vec3d(0, 0, 0))
         return
      }
   })

   let resultCount = Math.min(brassIngotCount, amethystShardCount)
   if (resultCount > 0) {
      SpawnItemEntityWithMovement(level, pos, Item.of('kubejs:unstable_matter', resultCount), new Vec3d(0, 0, 0))
   }
})