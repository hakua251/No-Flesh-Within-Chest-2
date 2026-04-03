// priority: 500
FTBQuestsEvents.customReward('ftb_final_end_1', event => {
    // 清空所有Astage
    const server = event.server
    MAAUtils.resetServerTaskProgress(server)
    AStages.removeAllPlayerStages()
    AStages.removeAllStagesFromServer(server)
    MAAUtils.getAllDimNet(server).forEach(dimnet => {
        dimnet.setLocked(false)
    })
})
