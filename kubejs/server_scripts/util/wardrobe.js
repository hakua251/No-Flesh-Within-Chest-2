// priority: 3000
/**
 * 判断是否在对应槽位已经有皮肤了
 * @param {Internal.Entity} entity 
 * @param {string} type 
 * @returns {boolean}
 */
function HadSetAnyWardrobeSkin(entity, type) {
    let wardrobe = entity.getWardrobe()
    for (let i = 0; i < wardrobe.getUnlockedSize(type); i++) {
        let curItem = wardrobe.getItem(type, i)
        if (curItem && !curItem.isEmpty()) return true
    }
    return false
}

/**
 * 
 * @param {Internal.Entity} entity 
 * @param {string} type 
 * @param {string} skin 
 */
function OrganSkinAdd(entity, type, skin) {
    if (!entity.isPlayer()) return
    if (!HadSetAnyWardrobeSkin(entity, type)) {
        AddSkinToSlot(entity, type, skin)
    }
}

/**
 * 
 * @param {Internal.Entity} entity 
 * @param {string} type 
 * @param {string} skin 
 */
function OrganSkinRemove(entity, type, skin) {
    if (!entity.isPlayer()) return
    if (HadSetAnyWardrobeSkin(entity, type)) {
        RemoveSkinFromSlot(entity, type, skin)
    }
}

/**
 * 向某个生物的某个位置添加皮肤
 * @param {Internal.Entity} entity 
 * @param {string} type 
 * @param {string} skin 
 * @returns {boolean}
 */
function AddSkinToSlot(entity, type, skin) {
    let wardrobe = entity.getWardrobe()
    for (let i = 0; i < wardrobe.getUnlockedSize(type); i++) {
        let curItem = wardrobe.getItem(type, i)
        if (!curItem || curItem.isEmpty()) {
            let skinItem = Item.of('armourers_workshop:skin')
            wardrobe.loadSkin(skin).addTo(skinItem)
            wardrobe.setItem(type, i, skinItem)
            wardrobe.broadcast()
            return true
        }
    }
    return false
}

/**
 * 从某个生物的某个位置移除皮肤
 * @param {Internal.Entity} entity 
 * @param {string} type 
 * @param {string} skin 
 * @returns 
 */
function RemoveSkinFromSlot(entity, type, skin) {
    let wardrobe = entity.getWardrobe()
    for (let i = 0; i < wardrobe.getUnlockedSize(type); i++) {
        let curItem = wardrobe.getItem(type, i)
        if (curItem && !curItem.isEmpty()) {
            let itemSkin = wardrobe.loadSkinByItem(curItem)
            if (itemSkin && itemSkin.getIdentifier() == skin) {
                wardrobe.setItem(type, i, Item.empty)
                wardrobe.broadcast()
                return true
            }
        }
    }
    return false
}


