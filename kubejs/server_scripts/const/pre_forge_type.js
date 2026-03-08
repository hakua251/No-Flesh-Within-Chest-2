// priority: 4000
const PreForgeTypeFlamberge = 'flamberge'

/**
 * 
 * @param {Internal.ItemStack} stack 
 * @param {String} preForgeType 
 * @returns 
 */
function SetPreForgeType(stack, preForgeType) {
    if (!stack.hasNBT()) return
    let nbt = stack.getNbt()
    nbt.putString('preForgeType', preForgeType)
}

/**
 * 
 * @param {Internal.ItemStack} stack 
 * @param {String} preForgeType 
 * @returns {boolean}
 */
function IsPreForge(stack, preForgeType) {
    let nbt = stack.getOrCreateTag()
    return nbt.getString('preForgeType') == preForgeType
}
