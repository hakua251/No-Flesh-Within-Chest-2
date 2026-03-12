// priority: 500
MAAEvents.ftbCustomItemFilter('fit_ancient_gula_scythe', event => {
    const stack = event.testItem
    const modularItem = stack.getItem()
    if (!TetraJSUtils.isModularItem(modularItem)) return
    let devourBloodEfficiency = modularItem.getEffectEfficiency(stack, 'kubejs:devour_blood')
    if (devourBloodEfficiency < 10) return
    let attackSpeedAttributeValue = modularItem.getAttributeValue(stack, 'generic.attack_speed')
    if (attackSpeedAttributeValue < -3) return
    event.setResult(true)
})