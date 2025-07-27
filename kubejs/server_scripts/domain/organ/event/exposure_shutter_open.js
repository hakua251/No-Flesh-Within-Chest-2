// priority: 999
const ExposureShutterOpen = new OrganEventModel('exposure_shutter_open')

ExposureEvents.shutterOpening(event => {
    const player = event.player
    let customData = {}
    ExposureShutterOpen.run(player, customData, [event])
})