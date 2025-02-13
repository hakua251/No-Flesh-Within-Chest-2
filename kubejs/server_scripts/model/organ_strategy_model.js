// priority: 900
function OrganStrategyModel(tag) {
    /**@type {Object<string, function(...any): void>} */
    this.strategyMap = {}
    this.onlyStrategyMap = {}
    this.init = (args) => { }
    this.defer = (args) => { }
    return this
}

OrganStrategyModel.prototype = {
    /**
     * @param {Object<string, function(...any): void>} strategyMap
     */
    setStrategyMap: function (strategyMap) {
        this.strategyMap = strategyMap
        return this
    },
    /**
     * @param {String} id
     * @param {function(any[]): void} func
     */
    addStrategy: function (id, func) {
        this.strategyMap[id] = func

        return this
    },
    /**
     * @param {String} id
     * @param {function(any[]): void} func
     */
    addOnlyStrategy: function (id, func) {
        this.onlyStrategyMap[id] = func
        return this
    },
    /**
     * @param {function(...any): void} data
     */
    setInit: function (initFunc) {
        this.init = initFunc
        return this
    },
    /**
 * @param {function(...any): void} data
 */
    setDefer: function (deferFunc) {
        this.defer = deferFunc
        return this
    },
    /**
     * @param {Internal.ChestCavityInventory} ccInv
     * @param {any[]} args 
     * @param {any} customData
     */
    run: function (ccInv, args, customData) {
        args.unshift(customData)
        this.init.apply(null, args)
        let onlySet = new Set()
        for (let i = 0; i < ccInv.getSlots(); i++) {
            let curItem = ccInv.getStackInSlot(i)
            if (!curItem || curItem.isEmpty()) continue
            let itemId = curItem.id
            if (this.onlyStrategyMap[itemId] && !onlySet.has(itemId)) {
                onlySet.add(itemId)
                this.onlyStrategyMap[itemId].apply(null, args.concat(curItem, i))
            }
            if (this.strategyMap[itemId]) {
                this.strategyMap[itemId].apply(null, args.concat(curItem, i))
            }
        }
        this.defer.apply(null, args)
        return
    },
}
