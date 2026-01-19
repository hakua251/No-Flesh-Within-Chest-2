// priority: 501
/**
 * 
 * @param {CustomMachine} machine 
 * @param {Number} levelIndicator 
 * @param {Number} chaosIndicator 
 * @param {Number} typeIndicator 
 * @param {Internal.ItemStack} extractantItem 
 * @param {Internal.ItemStack} auxiliaryItem 
 * @returns {Internal.List<Internal.Reward>}
 */
function EternalAltarGatewayFailure(machine, levelIndicator, chaosIndicator, typeIndicator, extractantItem, auxiliaryItem) {
    const failureList = []
    const data = machine.getData()
    if (!data) return failureList
    data.remove('levelModifier')
    if (auxiliaryItem && !auxiliaryItem.isEmpty()) {
        let typeModifier = GatewayAuxiliaryMaterialTypeMap[auxiliaryItem.getId()]
        let chaosModifier = GatewayAuxiliaryMaterialChaosMap[auxiliaryItem.getId()]
        failureList.push(new GatewayFunctionFailure((ctx) => {
            data.put('chaos_indicator', Clamp(chaosIndicator + chaosModifier, 0, 60))
            data.put('type_indicator', Clamp(typeIndicator + typeModifier, 0, 60))
        }))
    }
    return failureList
}