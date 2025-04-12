// priority: 2001
function DungeonModifierModel(id) {
    /**@type {string} */
    this.id = id
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager, Internal.PathfinderMob, DungeonAttributeModel): void} */
    this.createEntityModifier = () => { }
    return this
}

DungeonModifierModel.prototype = {
    /**
     * 创建生物时会运行的modifierAction
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager, Internal.PathfinderMob, DungeonAttributeModel): void} action 
     * @returns {DungeonModifierModel}
     */
    setCreateEntityAction: function (action) {
        this.createEntityModifier = action
        return this
    },
}