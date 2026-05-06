// priority: 2000
function LightmansCustomTraderModel() {
    this.creative = true
    /**@type {LightmansTradeModel[]} */
    this.trades = []
    this.type = 'lightmanscurrency:item_trader'
    return this
}

LightmansCustomTraderModel.prototype = {
    /** @param {LightmansTradeModel} trade */
    addTrade: function (trade) {
        this.trades.push(trade)
        return this
    },
    /** @param {LightmansTradeModel[]} trades */
    setTrades: function (trades) {
        this.trades = trades
        return this
    },
    /** 
     * @param {Internal.ItemStack[]} items 
     * @param {number} price 
     * */
    addSimpleTrade: function (items, price) {
        this.addTrade(new LightmansTradeModel().setPrice(price).setItems(items))
        return this
    },
    /** @returns {Internal.CompoundTag} */
    write: function () {
        const nbt = new $CompoundTag()
        nbt.putBoolean('Creative', this.creative)
        nbt.putString('Type', this.type)
        const tradesList = new $ListTag()
        this.trades.forEach(pTrade => {
            tradesList.add(pTrade.write())
        })
        nbt.put('Trades', tradesList)
        return nbt
    },
}


function LightmansTradeModel() {
    this.priceType = 'lightmanscurrency:coins'
    this.price = 100
    this.chain = 'main'
    /**@type {Internal.ItemStack[]} */
    this.items = []
    this.tradeDirection = 'SALE'
    this.type = 'lightmanscurrency:item'
    this.ruleData = []
    return this
}

LightmansTradeModel.prototype = {
    /** @param {Internal.ItemStack} item */
    addItem: function (item) {
        this.items.push(item)
        return this
    },
    /** @param {Internal.ItemStack[]} items */
    setItems: function (items) {
        this.items = items
        return this
    },
    /** @param {number} price */
    setPrice: function (price) {
        this.price = price
        return this
    },
    setTradeLimitRule: function (limit) {
        this.ruleData.push(new TradeLimitRuleModel(limit))
        return this
    },
    /** @returns {Internal.CompoundTag} */
    write: function () {
        const nbt = new $CompoundTag()
        const priceNbt = new $CompoundTag()
        const priceList = new $ListTag()
        ConvertMoneyIntoCoinItemList(CoinList, this.price).forEach(item => {
            let pNbt = new $CompoundTag()
            pNbt.putString('Coin', item.getId())
            pNbt.putInt('Amount', item.getCount())
            priceList.add(pNbt)
        })
        priceNbt.put('Value', priceList)
        priceNbt.putString('Chain', this.chain)
        priceNbt.putString('type', this.priceType)
        nbt.put('Price', priceNbt)

        const itemsList = new $ListTag()
        for (let i = 0; i < this.items.length; i++) {
            let pNbt = new $CompoundTag()
            let pItem = this.items[i]
            pNbt.putInt('Count', pItem.getCount())
            pNbt.putString('id', pItem.getId())
            if (pItem.hasNBT()) {
                pNbt.put('tag', pItem.getNbt())
            }
            pNbt.putInt('Slot', i)
            itemsList.add(pNbt)
        }
        const rulesList = new $ListTag()
        this.ruleData.forEach(rule => {
            rulesList.add(rule.write())
        })
        nbt.put('RuleData', rulesList)

        nbt.put('Items', itemsList)
        nbt.putString('TradeDirection', this.tradeDirection)
        nbt.putString('Type', this.type)
        return nbt
    },
}

function TradeLimitRuleModel(limit) {
    this.limit = limit
    this.type = 'lightmanscurrency:trade_limit'
    return this
}

TradeLimitRuleModel.prototype = {
    /** @returns {Internal.CompoundTag} */
    write: function () {
        const nbt = new $CompoundTag()
        nbt.putInt('Limit', this.limit)
        nbt.putString('Type', this.type)
        nbt.putBoolean('Active', true)
        return nbt
    }
}

/**
 * 
 * @param {Internal.ItemStack[]} items 
 * @param {number} price 
 * @returns {LightmansTradeModel}
 */
function CreateSimpleTradeModel(items, price) {
    return new LightmansTradeModel().setPrice(price).setItems(items)
}