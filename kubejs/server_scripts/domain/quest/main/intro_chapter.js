// priority: 500
ItemEvents.rightClicked('minecraft:ender_eye', event => {
    const player = event.player
    if (!player) return
    MAAUtils.onKubeTaskFinish('ender_eye_use', player, (task, pPlayer, teamData) => teamData.addProgress(task, 1))
})