// priority: 2000
const WormNeuronOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'chestcavity:defense', max: 5 }, 30)
    .addWeightRandom({ name: 'chestcavity:strength', max: 5 }, 30)
    .addWeightRandom({ name: 'chestcavity:health', max: 2 }, 10)
    .addWeightRandom({ name: 'chestcavity:nerves', max: 2 }, 10)
    .addWeightRandom({ name: 'chestcavity:endurance', max: 3 }, 10)
    .addWeightRandom({ name: 'chestcavity:breath_recovery', max: 2 }, 8)
    .addWeightRandom({ name: 'chestcavity:breath_capacity', max: 2 }, 8)
    .addWeightRandom({ name: 'chestcavity:detoxification', max: 2 }, 8)
    .addWeightRandom({ name: 'chestcavity:filtration', max: 2 }, 5)
    .addWeightRandom({ name: 'chestcavity:nutrition', max: 3 }, 5)
    .addWeightRandom({ name: 'chestcavity:digestion', max: 3 }, 5)
    .addWeightRandom({ name: 'chestcavity:metabolism', max: 2 }, 5)
    .addWeightRandom({ name: 'chestcavity:fire_resistant', max: 2 }, 3)
    .addWeightRandom({ name: 'chestcavity:knockback_resistant', max: 2 }, 3)

const WormNeuronPotentialOrganDataWeightModel = new WeightRandomModel()
    .addWeightRandom({ name: 'kubejs:extreme_fitness', max: 3 }, 30)
    .addWeightRandom({ name: 'kubejs:extreme_strength', max: 3 }, 30)
    .addWeightRandom({ name: 'kubejs:dragon_blood', max: 2 }, 5)
    .addWeightRandom({ name: 'kubejs:crit_damage', max: 2 }, 10)
    .addWeightRandom({ name: 'kubejs:crit_chance', max: 2 }, 10)

/**
 * @param {string} fluidId 
 */
function UnformedTumorFluidConfigModel(fluidId) {
    this.fluidId = fluidId
    this.organDataCount = 2
    this.potentialOrganDataCount = 1
    this.organDataModel = WormNeuronOrganDataWeightModel
    this.potentialOrganDataModel = WormNeuronPotentialOrganDataWeightModel
}


UnformedTumorFluidConfigModel.prototype = {
    /**
     * 
     * @param {number} count 
     * @returns 
     */
    setOrganDataCount: function (count) {
        this.organDataCount = count
        return this
    },
    /**
     * @param {number} count 
     * @returns 
     */
    setPotentialOrganDataCount: function (count) {
        this.potentialOrganDataCount = count
        return this
    },
    /**
     * @param {WeightRandomModel} model 
     * @returns 
     */
    setOrganDataModel: function (model) {
        this.organDataModel = model
        return this
    },
    /**
     * @param {WeightRandomModel} model 
     * @returns 
     */
    setPotentialOrganDataModel: function (model) {
        this.potentialOrganDataModel = model
        return this
    },
    /**
     * @returns {TumorOrganDataWeight[]}
     */
    getOrganDataAttri: function () {
        return this.organDataModel.getWeightRandomObjs(this.organDataCount)
    },
    /**
     * @returns {TumorOrganDataWeight[]}
     */
    getPotentialOrganDataAttri: function () {
        return this.potentialOrganDataModel.getWeightRandomObjs(this.potentialOrganDataCount)
    },
}
