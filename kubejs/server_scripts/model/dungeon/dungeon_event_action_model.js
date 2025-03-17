// priority: 2000
/**
 * 
 * @param {String} id spawnerId 用于在map中建立映射关系
 * @returns 
 */
function DungeonEventActionModel(id) {
    this.id = id
    /**@type {DungeonWaveModel[]} */
    this.waves = []
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} */
    this.initAction = () => { }
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager, boolean): void} */
    this.finishAction = () => { }   
    return this
}

DungeonEventActionModel.prototype = {
    /**
     *
     * @param {DungeonWaveModel} wave
     * @returns {DungeonEventActionModel}
     */
    addWave: function (wave) {
        this.waves.push(wave)
        return this
    },
    /**
     *
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} action
     * @returns {DungeonEventActionModel}
     */
    setInitAction: function (action) {
        this.initAction = action
        return this
    },
    /**
     *
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager, boolean): void} action
     * @returns {DungeonEventActionModel}
     */
    setFinishAction: function (action) {
        this.finishAction = action
        return this
    }
}


