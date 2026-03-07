// priority: 500
MAAEvents.ftbCustomItemFilter('tetra_hone_level', event => {
    const item = event.testItem
    if (!TetraJSUtils.isModularItem(item.getItem())) return
    const args = event.args
    let targetLevel = 1
    if (args.length > 0) targetLevel = Number(args[0])
    /**@type {Internal.ModularItem} */
    const modularItem = item.getItem()
    let honedCount = modularItem.getHonedCount(item)
    if (honedCount >= targetLevel) event.setResult(true)
})