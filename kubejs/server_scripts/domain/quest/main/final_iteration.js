// priority: 500
FTBQuestsEvents.customReward('final_iteration_1', event => {
    MAAUtils.onKubeTaskFinish('final_iteration_1', event.player, (pTask, pPlayer, pTeamData) => {
        pTeamData.addProgress(pTask, 1)
    })
})

FTBQuestsEvents.customReward('final_iteration_5', event => {
    MAAUtils.onKubeTaskFinish('final_iteration_5', event.player, (pTask, pPlayer, pTeamData) => {
        pTeamData.addProgress(pTask, 1)
    })
    AStages.addStageToServer('ftb_final_dim_restrict_1', event.server)
})

FTBQuestsEvents.customReward('final_iteration_15', event => {
    MAAUtils.onKubeTaskFinish('final_iteration_15', event.player, (pTask, pPlayer, pTeamData) => {
        pTeamData.addProgress(pTask, 1)
    })
})

FTBQuestsEvents.customReward('final_iteration_30', event => {
    MAAUtils.onKubeTaskFinish('final_iteration_30', event.player, (pTask, pPlayer, pTeamData) => {
        pTeamData.addProgress(pTask, 1)
    })
})

FTBQuestsEvents.customReward('final_iteration_50', event => {
    MAAUtils.onKubeTaskFinish('final_iteration_50', event.player, (pTask, pPlayer, pTeamData) => {
        pTeamData.addProgress(pTask, 1)
    })
})

FTBQuestsEvents.customReward('final_iteration_90', event => {
    MAAUtils.onKubeTaskFinish('final_iteration_90', event.player, (pTask, pPlayer, pTeamData) => {
        pTeamData.addProgress(pTask, 1)
    })
})

FTBQuestsEvents.customReward('final_iteration_100', event => {
    MAAUtils.onKubeTaskFinish('final_iteration_100', event.player, (pTask, pPlayer, pTeamData) => {
        pTeamData.addProgress(pTask, 1)
    })
})
