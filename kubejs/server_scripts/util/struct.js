// priority: 3000

/**
 * 
 * @param {Internal.ServerLevel} level 
 * @param {BlockPos} pos 
 * @param {string} structureId
 * @returns 
 */
function GenerateStructureByCenter(level, pos, structureId) {
    let structManager = level.getStructureManager()
    let structTemplate = structManager.getOrCreate(new ResourceLocation(structureId))
    let structSizeRange = ConvertVec3i2BlockPos(structTemplate.getSize())
    let structBuildPos = new BlockPos(pos.x - structSizeRange.x / 2, pos.y, pos.z - structSizeRange.z / 2)
    let chunkAccess = GetChunkAccess(level, structBuildPos)
    if (!chunkAccess) return
    let placementSettings = new $StructurePlaceSettings().setMirror($Mirror.NONE).setRotation($Rotation.NONE).setIgnoreEntities(false)
    structTemplate.placeInWorld(level, structBuildPos, structSizeRange, placementSettings, level.getRandom(), 2)
}
