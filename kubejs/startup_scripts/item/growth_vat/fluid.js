// priority: 1000
StartupEvents.registry('fluid', event => {
    event.create('nutrients_fluid')
        .bucketColor(0xBCC474)
        .stillTexture('kubejs:fluid/nutrients_fluid')
        .flowingTexture('kubejs:fluid/nutrients_fluid')
})