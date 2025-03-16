// priority: 2000
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

function DungeonWaveModel() {
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} */
    this.initAction = () => { }
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): boolean} */
    this.finishAction = () => { return false}
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} */
    this.tickAction = () => { }
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): boolean} */
    this.tickTester = () => { return false}
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): boolean} */
    this.endTester = () => { return true}
    return this
}

DungeonWaveModel.prototype = {
    /**
     * 
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} action 
     * @returns {DungeonWaveModel}
     */
    setInitAction: function (action) {
        this.initAction = action
        return this
    },
    /**
     * 
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} action 
     * @returns {DungeonWaveModel}
     */
    setFinishAction: function (action) {
        this.finishAction = action
        return this
    },
    /**
     *
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} action
     * @returns {DungeonWaveModel}
     */
    setTickAction: function (action) {
        this.tickAction = action
        return this
    },
    /**
     * 
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): boolean} tester 
     * @returns {DungeonWaveModel}
     */
    setTickTester: function (tester) {
        this.tickTester = tester
        return this
    },
    /**
     * 
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): boolean} tester 
     * @returns {DungeonWaveModel}
     */
    setEndTester: function (tester) {
        this.endTester = tester
        return this
    }
}




