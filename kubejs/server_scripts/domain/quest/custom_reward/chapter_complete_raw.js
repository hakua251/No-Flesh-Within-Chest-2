// priority: 500
FTBQuestsEvents.customReward('chapter_complete_raw', event => {
    const teamData = MAAUtils.getPlayerTeamData(event.player)
    MAAUtils.setChapterCompleted(teamData, event.reward.getQuest())
})