// priority: 999
const ExposureModifyFrame = new OrganEventModel('exposure_modify_frame')

ExposureEvents.modifyFrameData(event => {
    const player = event.player
    let customData = {}
    ExposureModifyFrame.run(player, customData, [event])
})