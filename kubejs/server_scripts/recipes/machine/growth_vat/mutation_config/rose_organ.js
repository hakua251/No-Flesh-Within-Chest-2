// priority: 502
const RoseQuartzMuscleMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:strength') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_muscle')
    })
RegistryTumorMutationConfig(RoseQuartzMuscleMutationConfigModel)

const RoseQuartzHeartMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:health') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_heart')
    })
RegistryTumorMutationConfig(RoseQuartzHeartMutationConfigModel)

const RoseQuartzRibMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:defense') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_rib')
    })
RegistryTumorMutationConfig(RoseQuartzRibMutationConfigModel)


const RoseQuartzLiverMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:detoxification') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_liver')
    })
RegistryTumorMutationConfig(RoseQuartzLiverMutationConfigModel)

const RoseQuartzDialyzerMutationConfigModel = new TumorMutationConfigModel()
    .setCondition((machine, fluid, item, slotId, organData) => {
        return fluid.id == 'kubejs:rose_nutrients_fluid' && organData.getFloat('kubejs:rosy') >= 1.0 && organData.getFloat('chestcavity:filtration') >= 2.0
    })
    .setResult((machine, fluid, item, slotId, organData) => {
        return Item.of('kubejs:rose_quartz_dialyzer')
    })
RegistryTumorMutationConfig(RoseQuartzDialyzerMutationConfigModel)
