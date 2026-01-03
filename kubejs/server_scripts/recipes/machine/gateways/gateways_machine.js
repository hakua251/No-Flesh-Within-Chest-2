// priority: 500
const GatewaysAwakeStoneLevelMap = {
    'kubejs:gateways_awake_stone': 0,
    'kubejs:gateways_awake_stone_2': 1,
    'kubejs:gateways_awake_stone_3': 3,
    'kubejs:gateways_awake_stone_4': 5,
    'kubejs:gateways_awake_stone_5': -1,
    'kubejs:gateways_awake_stone_6': -3,
    'kubejs:gateways_awake_stone_7': -5,
    'kubejs:gateways_awake_stone_8': 30,
    'kubejs:gateways_awake_stone_9': -30,
}
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine('kubejs:gateways', 60)
        .requireFunctionOnEnd(ctx => {
            const machine = ctx.getMachine()
            const data = machine.getData()
            const block = ctx.getBlock()
            const level = block.getLevel()
            const levelIndicator = data.getInt('level_indicator')
            const chaosIndicator = data.getInt('chaos_indicator')
            const typeIndicator = data.getInt('type_indicator')
        })
        .requireFunctionToStart(ctx => {
            const machine = ctx.getMachine()
            const data = machine.getData()
            const inputAwake = machine.getItemStored('input_awake')
            const awakeStoneLevel = GatewaysAwakeStoneLevelMap[inputAwake.getItem().getId()]
            data.putInt('levelModifier', awakeStoneLevel ? awakeStoneLevel : 0)
        })
        .requireItemTag('#kubejs:gateways_awake_stone', 1, 'input_awake')
        .resetOnError()
})