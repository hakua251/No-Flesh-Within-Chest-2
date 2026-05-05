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
    return this
}

LightmansTradeModel.prototype = {
    /** @param {Internal.ItemStack} item */
    addItem: function (item) {
        this.items.push(item)
        return this
    },
    /** @param {number} price */
    setPrice: function (price) {
        this.price = price
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
            pNbt.putInt('Slot', i)
            itemsList.add(pNbt)
        }

        nbt.put('Items', itemsList)
        nbt.putString('TradeDirection', this.tradeDirection)
        nbt.putString('Type', this.type)
        return nbt
    },
}