// priority: 500
RegistryExposureAttachmentStrategy('kubejs:exorcism_lens', ExorcismLensStrategy)

/**
 * @param {any} customData 
 * @param {Internal.FrameAddedEvent} event 
 */
function ExorcismLensStrategy(customData, event) {
    const cameraHolderEntity = event.cameraHolderEntity
    if (!cameraHolderEntity) return
    const entityList = event.getEntitiesInFrame()
    entityList.forEach(pEntity => {
        pEntity.attack(cameraHolderEntity.damageSources().magic(), 5)
    })
}