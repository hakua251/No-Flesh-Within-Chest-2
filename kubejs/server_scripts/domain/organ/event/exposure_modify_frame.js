// priority: 999
const ExposureFrameAdded = new OrganEventModel('exposure_frame_added')

NativeEvents.onEvent($FrameAddedEvent, /** @param {Internal.FrameAddedEvent} event */ event => {
    const cameraHolderEntity = event.cameraHolderEntity
    if (!cameraHolderEntity) return
    let customData = {}
    ExposureFrameAdded.run(cameraHolderEntity, customData, [event])
})