// priority: 503
/**
 * @type {Map<string, UnformedTumorFluidConfigModel>}
 */
const UnformedTumorFluidConfigMap = new Map()
/**
 * @param {UnformedTumorFluidConfigModel} organDataConfig 
 */
function RegistryUnformedTumorFluidConfig(organDataConfig) {
    UnformedTumorFluidConfigMap.set(organDataConfig.fluidId, organDataConfig)
}