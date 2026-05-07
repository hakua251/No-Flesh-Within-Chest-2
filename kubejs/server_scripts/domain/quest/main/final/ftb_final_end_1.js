// priority: 500
FTBQuestsEvents.customReward('final_end_1', event => {
    const server = event.server
    const player = event.player
    AStages.getStagesFromServer().forEach(stage => {
        if (stage.startsWith('ftb_final_')) AStages.removeStageFromServer(stage, server)
    })
    AStages.addStageToServer(FTBFinalTimerPause, server)
    ResetAllExceptStagesAndTask(server)
    MAAUtils.onKubeTaskFinish('final_end_1', player, (task, pPlayer, teamData) => teamData.addProgress(task, 1))
})

MAAEvents.textInputTaskSubmit('final_end_1', (event) => {
    const inputText = event.inputText.toLowerCase()
    const teamData = event.teamData
    const task = event.task
    if (inputText.includes('hello') && inputText.includes('world')) {
        teamData.addProgress(task, 1)
    }
})