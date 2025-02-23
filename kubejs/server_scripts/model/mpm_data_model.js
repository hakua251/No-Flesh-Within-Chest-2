// priority: 999

function MpmDataModel(id) {
    this.id = id
    this.usePlayerSkin = false
    this.url = ''
    this.texture = ''
    this.color = 0xffffff
    return this
}
MpmDataModel.prototype = {
    setId : function(id) {
        this.id = id
        return this 
    },
    setUsePlayerSkin : function(usePlayerSkin) {
        this.usePlayerSkin = usePlayerSkin
        return this 
    },
    setUrl : function(url) {
        this.url = url
        return this
    },
    setTexture : function(texture) {
        this.texture = texture
        return this
    },
    setColor : function(color) {
        this.color = color
        return this 
    },
    serializNbt : function() {
        let nbt = new $CompoundTag()
        let color = HexToRgb(this.color)
        console.log(color)
        nbt.putString('Id', 'moreplayermodels:parts/legs/legs_naga.json')
        nbt.putBoolean('UsePlayerSkin', this.usePlayerSkin)
        nbt.putString('Url', this.url)
        nbt.putString('Texture', this.texture)
        nbt.putInt('ColorR', color[0])
        nbt.putInt('ColorG', color[1])
        nbt.putInt('ColorB', color[2])
        return nbt
    },
    exportModelData: function() {
        let res = new $MpmPartData()
        res.setNbt(this.serializNbt())
        return res
    }
}
