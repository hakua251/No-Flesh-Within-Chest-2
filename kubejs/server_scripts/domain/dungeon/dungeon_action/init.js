// priority: 999
const DungeonSpawnerIdMap = {
    

}

/**
 * 
 * @param {string} id 
 * @param {DungeonEventActionModel} spawner 
 */
function RegistryDungeonSpawner(id, spawner) {
    DungeonSpawnerIdMap[id] = spawner
}


RegistryDungeonSpawner('killAmountTask_ZombieGroupTask', ZombieGroupTask)