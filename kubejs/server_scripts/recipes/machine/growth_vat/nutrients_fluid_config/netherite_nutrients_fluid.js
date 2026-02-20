// priority: 502
const NetheriteNutrientsOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:defense', mean: 2, sigma: 1 }, 20)
    .addWeightRandom({ name: 'chestcavity:strength', mean: 2, sigma: 1 }, 20)
    .addWeightRandom({ name: 'chestcavity:detoxification', mean: 1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:filtration', mean: 1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:nutrition', mean: 1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:digestion', mean: 1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:metabolism', mean: 1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'kubejs:netherite_refine_efficiency', mean: 1, sigma: 0.5 }, 5)

const NetheriteNutrientsPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'kubejs:proliferation_efficiency', mean: -1, sigma: 0.5 }, 30)
    .addWeightRandom({ name: 'kubejs:genetic_stability', mean: -1, sigma: 0.5 }, 15)
    .addWeightRandom({ name: 'chestcavity:breath_recovery', mean: 0.5, sigma: 0.5 }, 8)
    .addWeightRandom({ name: 'chestcavity:breath_capacity', mean: 0.5, sigma: 0.5 }, 8)

registryUnformedTumorFluidConfig(
    new UnformedTumorFluidConfigModel('kubejs:netherite_nutrients_fluid')
        .setOrganDataModel(NetheriteNutrientsOrganDataWeightModel)
        .setPotentialOrganDataCount(NetheriteNutrientsPotentialOrganDataWeightModel)
        .setOrganDataCount(2)
        .setPotentialOrganDataModel(1)
)