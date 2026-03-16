// priority: 1000
const ExposureAttachmentStrategy = new StrategyModel()

function RegistryExposureAttachmentStrategy(id, func) {
    ExposureAttachmentStrategy.addStrategy(id, func)
}

NativeEvents.onEvent($FrameAddedEvent, /** @param {Internal.FrameAddedEvent} event */ event => {
    const camera = event.camera
    let customData = {}
    if (!(camera.getItem() instanceof $CameraItem)) return
    let attachmentIdList = ExposureGetAttachmentIds(camera)
    if (attachmentIdList.length > 0) {
        ExposureAttachmentStrategy.run(attachmentIdList, [event], customData)
    }
})