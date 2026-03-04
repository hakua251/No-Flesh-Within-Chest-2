// priority: 500
ServerEvents.loaded(event => {
    const server = event.getServer()
    MAAUtils.setEternalWinterEnabled(server.persistentData.getInt('isEternalWinter') == 1 ? true : false)
})