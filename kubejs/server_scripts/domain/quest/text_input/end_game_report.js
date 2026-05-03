// priority: 500
MAAEvents.textInputTaskSubmit('end_game_report', (event) => {
    const inputText = event.inputText.toLowerCase()
    const teamData = event.teamData
    const task = event.task
    if (inputText != "") {
        teamData.addProgress(task, 1)
    }
})