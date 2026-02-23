// priority: 503
const TumorMutationConfigList = []

function TumorMutationConfigModel() {
    /**@type {function(CustomMachine, Internal.FluidStackJS, Internal.ItemStack, String, Internal.CompoundTag): boolean} */
    this.condition = (machine, fluid, item, slotId, organData) => { }
    /**@type {function(CustomMachine, Internal.FluidStackJS, Internal.ItemStack, String, Internal.CompoundTag): Internal.ItemStack} */
    this.result = (machine, fluid, item, slotId, organData) => { }
}

TumorMutationConfigModel.prototype = {
    /**
     * @param {CustomMachine} machine 
     * @param {Internal.FluidStackJS} fluid
     * @param {Internal.ItemStack} item 
     * @param {String} slotId 
     * @param {Internal.CompoundTag} organData 
     */
    isMatch: function (machine, fluid, item, slotId, organData) {
        return this.condition(machine, fluid, item, slotId, organData)
    },
    /**
     * @param {CustomMachine} machine 
     * @param {Internal.FluidStackJS} fluid
     * @param {Internal.ItemStack} item 
     * @param {String} slotId 
     * @param {Internal.CompoundTag} organData 
     */
    apply: function (machine, fluid, item, slotId, organData) {
        return this.result(machine, fluid, item, slotId, organData)
    },
    /**
     * @param {function(CustomMachine, Internal.FluidStackJS, Internal.ItemStack, String, Internal.CompoundTag): boolean} condition 
     */
    setCondition: function (condition) {
        this.condition = condition
        return this
    },
    /**
     * @param {function(CustomMachine, Internal.FluidStackJS, Internal.ItemStack, String, Internal.CompoundTag): Internal.ItemStack} result 
     */
    setResult: function (result) {
        this.result = result
        return this
    }
}

/**
 * @param {TumorMutationConfigModel} config 
 */
function RegistryTumorMutationConfig(config) {
    TumorMutationConfigList.push(config)
}