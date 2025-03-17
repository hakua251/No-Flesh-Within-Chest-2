// priority: 2001
function DungeonWaveModel() {
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} */
    this.initAction = () => { }
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager, boolean): boolean} */
    this.finishAction = () => { return false }
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} */
    this.tickAction = () => { }
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): boolean} */
    this.tickTester = () => { return false }
    /**@type {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): boolean} */
    this.endTester = () => { return true }
    return this
}

DungeonWaveModel.prototype = {
    /**
     * 一个波次仅会执行一次initAction
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} action 
     * @returns {DungeonWaveModel}
     */
    setInitAction: function (action) {
        this.initAction = action
        return this
    },
    /**
     * 在判断波次完成后，会执行finishAction；如果返回True则认为整个地牢结束，否则会执行下一波次
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager, boolean): void} action 
     * @returns {DungeonWaveModel}
     */
    setFinishAction: function (action) {
        this.finishAction = action
        return this
    },
    /**
     * 秒级别逻辑，20tick执行一次（底层限制性能影响）
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): void} action
     * @returns {DungeonWaveModel}
     */
    setTickAction: function (action) {
        this.tickAction = action
        return this
    },
    /**
     * 在Runing状态下，每20tick执行一次，返回true则认为满足波次条件，提前结束波次
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): boolean} tester 
     * @returns {DungeonWaveModel}
     */
    setTickTester: function (tester) {
        this.tickTester = tester
        return this
    },
    /**
     * 时间结束或TickTester返回true，会执行endTester，返回true则认为波次结束，否则会认为波次失败
     * @param {function(Internal.Level, Internal.SpawnMobAreaKubeEvent, LoquatAreaManager): boolean} tester 
     * @returns {DungeonWaveModel}
     */
    setEndTester: function (tester) {
        this.endTester = tester
        return this
    }
}