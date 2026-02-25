// priority: 500
RegistryExposureAttachmentStrategy('kubejs:reverse_causality_lens', ReverseCausalityLensStrategy)

/**
 * @param {any} customData 
 * @param {Internal.FrameAddedEvent} event 
 */
function ReverseCausalityLensStrategy(customData, event) {
    const cameraHolderEntity = event.cameraHolderEntity
    if (!cameraHolderEntity) return
    const level = cameraHolderEntity.level
    const entityList = event.getEntitiesInFrame()
    entityList.forEach(pEntity => {
        level.createExplosion(pEntity.x, pEntity.y, pEntity.z).explode()
    })
}