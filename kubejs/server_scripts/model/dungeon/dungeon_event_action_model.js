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
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} */
    this.successAction = () => { }
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} */
    this.failAction = () => { }   
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
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} action
     * @returns {DungeonEventActionModel}
     */
    setSuccessAction: function (action) {
        this.successAction = action
        return this
    },
    /**
     *
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} action
     * @returns {DungeonEventActionModel}
     */
    setFailAction: function (action) {
        this.failAction = action
        return this
    }
}


