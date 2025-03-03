// priority: 1900
function OrganTakeOffStrategyModel() {
    this.eventId = 'organ_take_off'
    /**@type {function[]} */
    this.inits = []
    /**@type {function[]} */
    this.defers = []
    return this
}

OrganTakeOffStrategyModel.prototype = {
    /**
     * @param {Object<string, Object<string, Function: void>} strategyMap
     */
    setStrategyMap: function (strategyMap) {
        this.strategyMap = strategyMap
        return this
    },
    /**
     * @param {function(...any): void} data
     */
    addInit: function (initFunc) {
        this.inits.push(initFunc)
        return this
    },
    /**
     * @param {function(...any): void} data
     */
    addDefer: function (deferFunc) {
        this.defers.push(deferFunc)
        return this
    },
    /**
     * @param {Internal.ChestCavityInstance} ccInstance
     * @param {any[]} args 
     * @param {OrganEventCustomData} customData
     */
    run: function (ccInstance, args, customData) {
        const ccInv = ccInstance.inventory
        const oldccInv = ccInstance.oldInventory
        if (!oldccInv) return
        customData.localDefer = []
        args.unshift(customData)
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        const onlyMap = new Map()
        let oldContainerSize = oldccInv.getContainerSize()
        for (let i = 0; i < oldContainerSize; i++) {
            let oldItem = oldccInv.getStackInSlot(i)
            if (!oldItem || oldItem.isEmpty()) continue
            let newItem = ccInv.getStackInSlot(i)
            if (oldItem.equals(newItem, true)) continue
            let itemId = oldItem.id
            let strategyModel = OrganStrategyMap[itemId]
            if (!strategyModel) continue
            let organEventStrategy = strategyModel.strategyMap[this.eventId]
            if (!organEventStrategy) continue
            if (organEventStrategy['only'] && !onlyMap.has(itemId)) {
                onlyMap.set(itemId, true)
                organEventStrategy['only'].apply(null, args.concat(oldItem, i))
            }
            if (organEventStrategy['default']) {
                organEventStrategy['default'].apply(null, args.concat(oldItem, i))
            }
        }

        if (customData.localDefer.length > 0) {
            customData.localDefer.sort((a, b) => {
                return a.priority - b.priority 
            })
            customData.localDefer.forEach((model) => {
                model.func.apply(null, [customData].concat(model.arg))
            })
        }
        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
        return
    },
}
