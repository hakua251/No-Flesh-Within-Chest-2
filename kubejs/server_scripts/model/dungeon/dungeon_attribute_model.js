// priority: 2000
/**
 * 
 * @param {Internal.CompoundTag} nbt
 * @returns 
 */
function DungeonAttributeModel(nbt) {
    /**@type {number} */
    this.difficulty = 1
    /**@type {string[]} */
    this.modifierList = []
    if (!nbt) return
    if (nbt.contains('difficulty')) {
        this.difficulty = nbt.getInt('difficulty')
    }
    if (nbt.contains('modifierList')) {
        let list = nbt.getList('modifierList', GET_STRING_TYPE)
        list.forEach((modifierName) => {
            this.modifierList.push(modifierName.getAsString())
        })
    }
    if (nbt.contains('targetBiomeType')) {
        this.targetBiomeType = nbt.getString('targetBiomeType')
    }
    if (nbt.contains('purifyActionType')) {
        this.purifyActionType = nbt.getString('purifyActionType')
    }
    if (nbt.contains('actionItemList')) {
        let itemNbtList = nbt.getList('actionItemList', GET_COMPOUND_TYPE)
        this.actionItemList = ConvertNBT2ItemStackList(itemNbtList)
    }

    return
}


DungeonAttributeModel.prototype = {
    getDifficulty: function () {
        return this.difficulty
    },
    getModifierList: function () {
        return this.modifierList
    },
    getTargetBiomeType: function () {
        return this.targetBiomeType
    },
    getPurifyActionType: function () {
        return this.purifyActionType
    },
    getActionItemList: function () {
        return this.actionItemList
    },
}