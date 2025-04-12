// priority: 2000
/**
 * 
 * @param {Internal.CompoundTag} nbt
 * @returns 
 */
function DungeonAttributeModel(nbt) {
    /**@type {number} */
    this.tier = 1
    /**@type {string[]} */
    this.modifierList = []
    /**@type {string} */
    this.spawnId = ''
    if (!nbt) return
    if (nbt.contains('tier')) {
        this.tier = nbt.getInt('tier')
    }
    if (nbt.contains('modifierList')) {
        let list = nbt.getList('modifierList', GET_STRING_TYPE)
        list.forEach((modifierName) => {
            this.modifierList.push(modifierName.toString())
        })
    }
    if (nbt.contains('spawnId')) {
        this.spawnId = nbt.getString('spawnId')
    }
    return
}


DungeonAttributeModel.prototype = {
    serializeToNBT: function () {
        let nbt = new $CompoundTag()
        nbt.putInt('tier', this.tier)
        nbt.put('modifierList', this.modifierList)
        nbt.putString('spawnId', this.spawnId)
        return nbt
    },
    getTier: function () {
        return this.tier
    },
    getModifierList: function () {
        return this.modifierList 
    },
    getSpawnId: function () {
        return this.spawnId  
    }
}