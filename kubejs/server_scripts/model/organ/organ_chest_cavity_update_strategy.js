// priority: 1900
function OrganChestCavityUpdateStrategyModel() {
    /**@type {Object<string, Object<string, function(...any)>: void>} */
    this.eventId = 'chest_cavity_update'
    /**@type {function[]} */
    this.inits = []
    /**@type {function[]} */
    this.defers = []
    return this
}

OrganChestCavityUpdateStrategyModel.prototype = {
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
     * @param {OrganChestCavityUpdateStrategyCustomData} customData
     */
    run: function (ccInstance, args, customData) {
        const ccInv = ccInstance.inventory

        args.unshift(customData)
        this.inits.forEach(init => {
            init.apply(null, args)
        })
        const onlyMap = new Map()
        ccInstance.clearListenerMap()

        let slotMap = ccInstance.getListenerMap(this.eventId)
        if (slotMap) {
            let strategyFuncList = []
            slotMap.forEach((slotIndex, slotType) => {
                if (IsContainerSlot(slotType)) return
                let curItem = ccInv.getStackInSlot(slotIndex)
                let itemId = String(curItem.id)

                // 执行常规更新器官效果策略
                if (!curItem || curItem.isEmpty()) return

                let strategyModel = OrganStrategyMap[itemId]
                if (!strategyModel) return

                let organEventStrategy = strategyModel.strategyMap[this.eventId]
                // 器官更新策略
                if (organEventStrategy) {
                    if (organEventStrategy['only'] && !onlyMap.has(itemId)) {
                        onlyMap.set(itemId, true)
                        organEventStrategy['only'].forEach(e => {
                            strategyFuncList.push({
                                'strategyModel': e,
                                'arg': args.concat(curItem, slotIndex, slotType)
                            })
                        })
                    }
                    if (organEventStrategy['default']) {
                        organEventStrategy['default'].forEach(e => {
                            strategyFuncList.push({
                                'strategyModel': e,
                                'arg': args.concat(curItem, slotIndex, slotType)
                            })
                        })
                    }
                }
            })
            if (strategyFuncList.length > 0) {
                strategyFuncList.sort((a, b) => {
                    return b['strategyModel']['priority'] - a['strategyModel']['priority']
                })
                strategyFuncList.forEach((model) => {
                    model['strategyModel']['func'].apply(null, model['arg'])
                })
            }
        }
        this.defers.forEach(defer => {
            defer.apply(null, args)
        })
        return
    },
}