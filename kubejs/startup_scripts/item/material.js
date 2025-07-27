// priority: 1000
// 材料 / 中间件
StartupEvents.registry('item', event => {
    event.create('sawdust').texture('kubejs:item/material/sawdust').maxStackSize(64).burnTime(400)
})

