// priority: 500
ServerEvents.recipes(event => {
    // 在运行时，每十秒会消耗一定量的物品，如果没有足够的物品，那么机器会停止运行
    event.recipes.custommachinery.custom_machine('kubejs:world_computer', 600)
        .requireSU(128)
        .requireFunctionEachTick(ctx => {
            const machine = ctx.getMachine()
            const data = machine.getData()
            let resouceBar = data.getInt('resource_bar')
            let ccItem = machine.getItemStored('input_1')
            if (ccItem.is('create:chromatic_compound')) {
                let ccCount = ccItem ? ccItem.getCount() : 0
                data.putInt('resource_bar', Math.min(resouceBar + ccCount, 1000000))
                machine.setItemStored('input_1', Item.empty)
            }
            return ctx.success()
        })
        .requireFunctionOnEnd(ctx => {
            const machine = ctx.getMachine()
            const data = machine.getData()
            let resouceBar = data.getInt('resource_bar')
            data.putInt('resource_bar', 0)
            if (Math.random() < Math.pow(resouceBar / 1000000, 2)) {
                return ctx.success()
            }
            return ctx.error('Error')
        })
        .requireItem(Item.of('kubejs:reverse_causality_chip'), 'input_3')
        .requireItem(Item.of('kubejs:reverse_causality_chip'), 'input_2')
        .requireItem(Item.of('create:chromatic_compound'), 'input_1')
        .produceItem(Item.of('kubejs:world_renderer', 1), 'output_1')
        .resetOnError()

    event.recipes.custommachinery.custom_machine('kubejs:world_computer', 600)
        .requireStructure([
            [
                "ACCCA",
                "CGGGC",
                "CGGGC",
                "CGGGC",
                "ACCCA"
            ],
            [
                "C   C",
                " HSH ",
                " SRS ",
                " WmY ",
                "C   C"
            ],
            [
                "C   C",
                " JKJ ",
                " KRK ",
                " JKJ ",
                "C   C"
            ],
            [
                "C   C",
                " LLL ",
                " LRL ",
                " LLL ",
                "C   C"
            ],
            [
                "CCCCC",
                "CN NC",
                "C V C",
                "CN NC",
                "CCCCC"
            ],
            [
                "     ",
                " O O ",
                "     ",
                " O O ",
                "     "
            ]
        ],
            {
                "C": "create:fluid_pipe",
                "K": "createprism:train_clear_glass_casing",
                "J": "create:nixie_tube",
                "O": "createaddition:small_light_connector",
                "S": "kubejs:void_diffraction_vault",
                "V": "createaddition:tesla_coil",
                "N": "minecraft:lightning_rod",
                "L": "kubejs:world_renderer",
                "R": "kubejs:cerebral_brain_processor",
                "W": "kubejs:quantum_dimension_resolver",
                "A": "create:railway_casing",
                "Y": "kubejs:entity_simulator",
                "H": "kubejs:computer_core",
                "G": "kubejs:data_compressor",
            })
        .requireItem(Item.of('kubejs:reverse_causality_chip'), 'input_3')
        .requireItem(Item.of('kubejs:reverse_causality_chip'), 'input_2')
        .produceItem(Item.of('minecraft:acacia_boat', 1), 'output_1')
        .resetOnError()
})

