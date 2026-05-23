// priority: 500
MAAEvents.ftbCustomItemFilter('is_skin_type', event => {
    const item = event.testItem
    const args = event.args
    if (args.length <= 0) return
    const targetType = String(args[0])
    if (!item.hasNBT()) return
    const nbt = item.getNbt()
    if (!nbt.contains('ArmourersWorkshop')) return
    let armourersNbt = nbt.getCompound('ArmourersWorkshop')
    if (armourersNbt.contains('SkinType') && armourersNbt.getString('SkinType') == targetType) return event.setResult(true)
})