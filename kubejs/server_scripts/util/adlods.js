// priority: 3000

/**
 * 
 * @param {Internal.Level} level 
 * @param {BlockPos} pos
 * @param {number} radius
 * 
 */
function ListGeneratedAdlodsAround(level, pos, radius) {
    let depositList = $WorldDeposits.get(level).generated().values().stream().filter(dep => {
        return $AbstractOre.withinRadius(new $ChunkPos(dep.pos), new $ChunkPos(pos), radius)
    }).toList()
    return depositList
}