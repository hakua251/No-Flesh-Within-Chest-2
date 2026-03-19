// priority: 500
FTBQuestsEvents.customReward('unlock_create_intro_task_easy', event => {
    const player = event.player
    MAAUtils.onKubeTaskFinish('create_intro_task_easy', player, (task, pPlayer, teamData) => teamData.addProgress(task, 1))
})

FTBQuestsEvents.customReward('unlock_create_intro_task_hard', event => {
    const player = event.player
    MAAUtils.onKubeTaskFinish('create_intro_task_hard', player, (task, pPlayer, teamData) => teamData.addProgress(task, 1))
})