// priority: 500
ServerEvents.recipes(event => {
    // 在运行时，每十秒会消耗一定量的物品，如果没有足够的物品，那么机器会停止运行
    event.recipes.custommachinery.custom_machine('kubejs:world_computer', 1200)
        .requireFunctionEachTick(ctx => {

        })
        .resetOnError()
})