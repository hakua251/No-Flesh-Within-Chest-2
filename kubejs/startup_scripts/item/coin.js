// priority: 1000
// 注册货币
StartupEvents.registry('item', event => {
	event.create('vow_coin')
		.texture('kubejs:item/vow_coin')
        .burnTime(36000)
		.fireResistant()
})

CoinEvents.registerCoins(event => {
    event.addCoin('vow_coin', 'kubejs:vow_coin')
        .group(99)
        .money(1)
        .maxSize(65535)
        .hideDefault()
        .isGlobal()
        .defaultArea(CoinLayoutArea.TOP_LEFT)
})