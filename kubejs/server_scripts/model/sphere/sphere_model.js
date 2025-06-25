// priority: 2001

/**
 * 基础生态球属性构建
 * @returns 
 */
function SphereModel() {
    this.shellBlock = Block.getBlock('minecraft:stone').defaultBlockState()
    this.shellRadius = 10
    this.shellThickness = 1
    this.decorator = new SphereDecoratorPackerModel()
    this.center = new BlockPos(0, 0, 0)
}

SphereModel.prototype = {
    /**
     * 设置球壳
     * @param {string} block
     * @returns
     */
    setShellProperties: function (block, radius, thickness) {
        this.shellBlock = block
        this.shellRadius = radius
        this.shellThickness = thickness
        return this
    },
    /**
     * 添加装饰器
     * @param {SphereDecorator} decorator
     * @returns
     */
    addDecorator: function (decorator) {
        this.decorator.addDecorator(decorator)
        return this
    },
    /**
     * 生成生态球
     * @param {BlockPos} pos
     * @returns
     */
    generateSphere: function (level, pos) {
        this.center = pos
        this.decorator.runGlobalDecorators(level, this)
        /**@type {Object<string, Internal.ChunkAccess>} */
        for (let x = -this.shellRadius; x <= this.shellRadius; x++) {
            for (let z = -this.shellRadius; z <= this.shellRadius; z++) {
                for (let y = -this.shellRadius; y <= this.shellRadius; y++) {
                    let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2))
                    if (distance <= this.shellRadius && distance >= this.shellRadius - this.shellThickness) {
                        // 球壳填充
                        let curPos = new BlockPos(pos.x + x, pos.y + y, pos.z + z)
                        level.setBlock(curPos, this.shellBlock, 2)
                        this.decorator.runShellDecorators(level, this, new BlockPos(x, y, z))
                        continue
                    }
                    if (distance <= this.shellRadius - this.shellThickness) {
                        // 球壳内部空闲空间
                        this.decorator.runInnerDecorators(level, this, new BlockPos(x, y, z))
                        continue
                    }
                }
            }
        }
        return
    }
}