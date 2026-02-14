// priority: 1000
// 杂项
StartupEvents.registry('item', event => {
    event.create('full_mark').texture('kubejs:item/materials/full_mark')
    event.create('sawdust').texture('kubejs:item/materials/sawdust').maxStackSize(64).burnTime(400)
    event.create('badge').texture('kubejs:item/materials/badge').maxStackSize(1)
})