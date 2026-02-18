// priority: 502
/**
 * @type {Map<string, UnformedTumorFluidConfigModel>}
 */
const UnformedTumorFluidConfigMap = new Map()
/**
 * @param {UnformedTumorFluidConfigModel} organDataConfig 
 */
function registryUnformedTumorFluidConfig(organDataConfig) {
    UnformedTumorFluidConfigMap.set(organDataConfig.fluidId, organDataConfig)
}
registryUnformedTumorFluidConfig(new UnformedTumorFluidConfigModel('kubejs:nutrients_fluid'))

