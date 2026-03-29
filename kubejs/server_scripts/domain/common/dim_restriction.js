// priority: 500
AStages.addRestrictionForDimension('infinity/nexus', 'ftb_can_enter_nexus', 'infinity:nexus')
AStages.addRestrictionForDimension('main/dimensional_worm_nether', 'ftb_server_ban_nether', 'minecraft:nether')
    .setReverse(true)
AStages.addRestrictionForDimension('infinity/infinity', 'ftb_final_dim_restrict_1', 'infinity:infinity')
    .setReverse(true)
    .setMaxStayTimer(ATime('5m'))