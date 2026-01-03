// priority: 500
const DefaultGatewayBossEventSettings = new GatewayBossEventSettings(GatewayBossEventSettingsMode.BOSS_BAR, true)
const DefaultGatewayRule = new GatewayRules(8, 32, true, true, false, true, false, 0, 32, 0)
const GatewayAwakeStoneLevelMap = {
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
const GatewayColorMapping = new PiecewiseMappingModel().addPiece(0, 10, Color.GREEN).addPiece(10, 20, Color.YELLOW).addPiece(20, 30, Color.RED).addPiece(30, 40, Color.LIGHT_PURPLE).addPiece(40, 50, Color.DARK_PURPLE).addPiece(50, 60, Color.AQUA)
const GatewaySizeMapping = new PiecewiseMappingModel().addPiece(0, 20, GatewaySize.SMALL).addPiece(20, 50, GatewaySize.MEDIUM).addPiece(50, 100, GatewaySize.LARGE)
const GatewayEntityMapping = new PiecewiseMappingModel()
    .addPiece(0, 10, 'minecraft:zombie')
    .addPiece(20, 30, 'minecraft:skeleton')
    .addPiece(30, 60, 'minecraft:spider')

ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine('kubejs:gateways', 60)
        .requireFunctionOnEnd(ctx => {
            const machine = ctx.getMachine()
            const data = machine.getData()
            const block = ctx.getBlock()
            const level = block.getLevel()
            const player = GetNearestPlayer(level, gatewayPos, 32)
            if (!player) return ctx.error('Error')

            const levelIndicator = data.getInt('level_indicator')
            const chaosIndicator = data.getInt('chaos_indicator')
            const typeIndicator = data.getInt('type_indicator')

            const gatewayPos = block.getPos().above()
            const waveEntityList = new WeightRandomModel()
            let gatewayColor = GatewayColorMapping.getFirstValue(typeIndicator)
            let gatewaySize = GatewaySizeMapping.getFirstValue(levelIndicator)
            let gatewayEntityItemList = GatewayEntityMapping.findItems(typeIndicator)
            gatewayEntityItemList.forEach(item => {
                waveEntityList.addWeightRandom(item.getValue(), Math.abs(item.getPercent(typeIndicator) - 0.5))
            })

            let waveEntities = GatewayUtils.buildStandardWaveEntity('minecraft:zombie', '', new $CompoundTag(), [], true, 3)
            let wave = new GatewayWave([waveEntities], [], [], 600, 200)

            let gatewayNormal = new GatewayNormal(
                gatewaySize ? gatewaySize : GatewaySize.SMALL,
                gatewayColor ? gatewayColor : Color.RED,
                [wave],
                [new GatewayStackReward('minecraft:oak_button')],
                [],
                GatewaySpawnAlgorithm.OPEN_FIELD,
                DefaultGatewayRule,
                DefaultGatewayBossEventSettings)

            let gatewayEntity = gatewayNormal.createEntity(level, player)
            gatewayEntity.setPos(gatewayPos.getX(), gatewayPos.getY(), gatewayPos.getZ())
            gatewayEntity.spawn()
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