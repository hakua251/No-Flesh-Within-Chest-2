// priority: 502
const CopperNutrientsOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'kubejs:crit_damage', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'kubejs:crit_chance', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'kubejs:dragon_blood', mean: 0.5, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:health', mean: 1, sigma: 0.5 }, 5)
    .addWeightRandom({ name: 'chestcavity:nerves', mean: 2, sigma: 0.5}, 15)
    .addWeightRandom({ name: 'chestcavity:breath_recovery', mean: 0.5, sigma: 0.5 }, 8)
    .addWeightRandom({ name: 'chestcavity:breath_capacity', mean: 0.5, sigma: 0.5 }, 8)

const CopperNutrientsPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'kubejs:extreme_fitness', mean: 1, sigma: 0.5 }, 15)
    .addWeightRandom({ name: 'kubejs:extreme_strength', mean: 1, sigma: 0.5 }, 15)
    .addWeightRandom({ name: 'kubejs:proliferation_efficiency', mean: 2, sigma: 1 }, 30)
    .addWeightRandom({ name: 'kubejs:genetic_stability', mean: 2, sigma: 1 }, 15)
    .addWeightRandom({ name: 'kubejs:copper_refine_efficiency', mean: 2, sigma: 1 }, 30)

registryUnformedTumorFluidConfig(
    new UnformedTumorFluidConfigModel('kubejs:copper_nutrients_fluid')
        .setOrganDataModel(CopperNutrientsOrganDataWeightModel)
        .setPotentialOrganDataCount(CopperNutrientsPotentialOrganDataWeightModel)
        .setOrganDataCount(1)
        .setPotentialOrganDataModel(2)
)