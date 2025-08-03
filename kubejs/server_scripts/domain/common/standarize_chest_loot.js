// priority: 500

// const ChestLootBaseStructStrategy = new StrategyModel()

// function RegisterChestLootBaseStructStrategy(id, func) {
//     ChestLootBaseStructStrategy.addStrategy(id, func)
// }
// /**
//  * 标准化箱子战利品
//  * 通过将原有的战利品内容全部删除，以各种依据，执行不同的战利品池判断策略和生成内容，来重新构建箱子战利品
//  * @param {Internal.LootContextJS} event 
//  */
// function StandardizeChestLoot(event) {
//     event.loot.clear()
//     const level = event.level
//     const player = event.player
//     const blockPos = event.blockPos
//     let optBiome = level.getBiome(blockPos).unwrapKey()
//     const biome = optBiome.isPresent() ? optBiome.get().location().toString() : null
//     let structResourceKey = GetPosInSturcture(level, blockPos)
//     const struct = structResourceKey ? structResourceKey.location().toString() : null

// }