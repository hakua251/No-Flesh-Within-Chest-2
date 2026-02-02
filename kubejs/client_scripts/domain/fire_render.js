// priority: 500
NetworkEvents.dataReceived('fire_render', event => {
    const data = event.data
    MAAUtils.setNoFireRender(data.getBoolean('noFireRender'))
})
