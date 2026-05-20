// priority: 500
ServerEvents.loaded(event => {
    const server = event.getServer()
    MAAUtils.resetInstance()
    MAAUtils.setEternalWinterEnabled(server, server.persistentData.getInt('isEternalWinter') == 1 ? true : false)
})