// priority: 2000
/**@type {ArtificalTicketConvertConfigModel[]} */
const ArtificalTicketConvertConfigList = []

function ArtificalTicketConvertConfigModel() {
    /**@type {function(CustomMachine, Player, Number, Number, Number, Internal.List<Internal.Reward>): boolean} */
    this.condition = (machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList) => { }
    /**@type {function(CustomMachine, Player, Number, Number, Number, Internal.List<Internal.Reward>): Internal.ItemStack} */
    this.result = (machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList) => { }
}

ArtificalTicketConvertConfigModel.prototype = {
    /**
     * @param {CustomMachine} machine 
     * @param {Player} player
     * @param {Number} levelIndicator 
     * @param {Number} chaosIndicator 
     * @param {Number} typeIndicator 
     * @param {Internal.List<Internal.Reward>} rewardList 
     */
    isMatch: function (machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList) {
        return this.condition(machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList)
    },
    /**
     * @param {CustomMachine} machine 
     * @param {Internal.FluidStackJS} fluid
     * @param {Player} player
     * @param {Number} levelIndicator 
     * @param {Number} chaosIndicator 
     * @param {Number} typeIndicator 
     * @param {Internal.List<Internal.Reward>} rewardList 
     */
    apply: function (machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList) {
        return this.result(machine, player, levelIndicator, chaosIndicator, typeIndicator, rewardList)
    },
    /**
     * @param {function(CustomMachine, Player, Number, Number, Number, Internal.List<Internal.Reward>): boolean} condition 
     */
    setCondition: function (condition) {
        this.condition = condition
        return this
    },
    /**
     * @param {function(CustomMachine, Player, Number, Number, Number, Internal.List<Internal.Reward>): Internal.ItemStack} result 
     */
    setResult: function (result) {
        this.result = result
        return this
    }
}

/**
 * @param {ArtificalTicketConvertConfigModel} config 
 */
function RegistryArtificalTicketConvertConfig(config) {
    ArtificalTicketConvertConfigList.push(config)
}