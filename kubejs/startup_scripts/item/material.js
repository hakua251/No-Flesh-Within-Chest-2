// priority: 1000
// 材料 / 中间件
StartupEvents.registry('item', event => {
    event.create('sawdust').texture('kubejs:item/material/sawdust').maxStackSize(64).burnTime(400)

    event.create('iron_copper_extreme_ore').texture('kubejs:item/material/iron_copper_extreme_ore').maxStackSize(1)
    event.create('iron_copper_dense_ore').texture('kubejs:item/material/iron_copper_dense_ore').maxStackSize(1)
    event.create('iron_copper_ore').texture('kubejs:item/material/iron_copper_ore').maxStackSize(1)
    event.create('iron_copper_waste_ore').texture('kubejs:item/material/iron_copper_waste_ore').maxStackSize(1)

    event.create('coal_dense_ore').texture('kubejs:item/material/coal_dense_ore').maxStackSize(1)
    event.create('coal_diamond_dense_ore').texture('kubejs:item/material/diamond_dense_ore').maxStackSize(1)

})

StartupEvents.registry('fluid', event => {
    event.create('mantle_fluid')
        .thickTexture(0x7d0004)
        .bucketColor(0x7d0004)

    event.create('bright_mantle_fluid')
        .thickTexture(0xef5400)
        .bucketColor(0xef5400)

    event.create('dark_mantle_fluid')
        .thickTexture(0x1a0001)
        .bucketColor(0x1a0001)
})