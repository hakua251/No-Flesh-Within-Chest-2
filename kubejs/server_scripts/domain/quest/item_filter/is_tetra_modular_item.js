// priority: 500
MAAEvents.ftbCustomItemFilter('is_tetra_modular_item', event => {
    const item = event.testItem
    if (!TetraJSUtils.isModularItem(item.getItem())) return
    event.setResult(true)
})