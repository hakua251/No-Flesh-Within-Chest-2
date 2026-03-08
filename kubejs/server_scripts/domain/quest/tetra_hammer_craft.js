// priority: 500
TetraJSEvents.hammerBlockCraftConsumeTool(event => {
    MAAUtils.onKubeTaskFinish('tetra_hammer_craft', event.player, (pTask, pPlayer, pTeamData) => {
        pTeamData.addProgress(pTask, 1)
    })
})