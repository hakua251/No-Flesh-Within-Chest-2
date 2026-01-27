
// priority: 500
BlockEvents.rightClicked('kubejs:mantle_energy_extractor', event => {
    /**@type {Internal.CustomMachineBlock} */
    const block = event.block
    const player = event.player
    const level = event.level
    /**@type {Internal.MachineTile} */
    const blockEntity = level.getBlockEntity(block.getPos())
    const machine = ConvertBlockEntity2MachineJS(blockEntity)
    if (!machine) return
    const data = machine.getData()
    const depth = data.getInt('depth_bar')
    let taskIdList = ['mantle_energy_1']
    if (depth >= 200) taskIdList.push('mantle_energy_2')
    if (depth >= 500) taskIdList.push('mantle_energy_3')
    if (depth >= 1000) taskIdList.push('mantle_energy_4')
    if (depth >= 2000) taskIdList.push('mantle_energy_5')
    if (depth >= 3000) taskIdList.push('mantle_energy_6')
    if (depth >= 5000) taskIdList.push('mantle_energy_7')
    if (depth >= 7500) taskIdList.push('mantle_energy_8')
    MAAUtils.onKubeTasksFinish(taskIdList, player, (task, pPlayer, pTeamData) => {
        pTeamData.addProgress(task, 1)
    })
})