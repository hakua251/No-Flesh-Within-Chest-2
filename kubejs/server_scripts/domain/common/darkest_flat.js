// priority: 500
/**
 * @type {PiecewiseMappingModel}
 */
const DarkestFlatWaveEntityMapping = new PiecewiseMappingModel()
    .addPiece(0, 10, new WeightRandomModel()
        .addWeightRandom('graveyard:ghoul', 100)
        .addWeightRandom('graveyard:revenant', 100)
    )
    .addPiece(10, 20, new WeightRandomModel()
        .addWeightRandom('graveyard:ghoul', 80)
        .addWeightRandom('graveyard:revenant', 100)
        .addWeightRandom('graveyard:corrupted_pillager', 20)
    )
    .addPiece(20, 30, new WeightRandomModel()
        .addWeightRandom('graveyard:ghoul', 80)
        .addWeightRandom('graveyard:revenant', 80)
        .addWeightRandom('graveyard:corrupted_pillager', 20)
        .addWeightRandom('graveyard:corrupted_vindicator', 20)
    )
    .addPiece(30, 50, new WeightRandomModel()
        .addWeightRandom('graveyard:ghoul', 50)
        .addWeightRandom('graveyard:revenant', 50)
        .addWeightRandom('graveyard:corrupted_pillager', 70)
        .addWeightRandom('graveyard:corrupted_vindicator', 20)
        .addWeightRandom('graveyard:acolyte', 10)
    )
    .addPiece(50, 70, new WeightRandomModel()
        .addWeightRandom('graveyard:reaper', 10)
        .addWeightRandom('graveyard:corrupted_pillager', 120)
        .addWeightRandom('graveyard:corrupted_vindicator', 60)
        .addWeightRandom('graveyard:acolyte', 10)
    )
    .addPiece(70, Infinity, new WeightRandomModel()
        .addWeightRandom('graveyard:reaper', 30)
        .addWeightRandom('graveyard:corrupted_pillager', 80)
        .addWeightRandom('graveyard:corrupted_vindicator', 80)
        .addWeightRandom('graveyard:acolyte', 10)
    )

const DarkestFlatWaveBossWeightModel = new WeightRandomModel()
    .addWeightRandom(/**@param {Internal.Level} level*/ level => level.createEntity('cataclysm:the_harbinger').mergeNbt({ Is_Act: 1 }), 100)
    .addWeightRandom(/**@param {Internal.Level} level*/ level => level.createEntity('cataclysm:ignis'), 100)
    .addWeightRandom(/**@param {Internal.Level} level*/ level => level.createEntity('cataclysm:maledictu'), 100)
    .addWeightRandom(/**@param {Internal.Level} level*/ level => level.createEntity('cataclysm:netherite_monstrosity'), 100)
    .addWeightRandom(/**@param {Internal.Level} level*/ level => level.createEntity('cataclysm:scylla'), 100)
    .addWeightRandom(/**@param {Internal.Level} level*/ level => level.createEntity('cataclysm:ender_guardian'), 100)
    .addWeightRandom(/**@param {Internal.Level} level*/ level => level.createEntity('cataclysm:ancient_remnant'), 100)

const DarkestFlatAttackModifierIdentifier = 'darkest_flat_attack'
const DarkestFlatAttackModifierUUID = UUID.fromString('D5F8621C-F85D-4FD4-93C4-DF8B2AC4790E')
const DarkestFlatHealthModifierIdentifier = 'darkest_flat_health'
const DarkestFlatHealthModifierUUID = UUID.fromString('D946E13D-E787-4AA2-9C46-EF59294E755A')
const DarkestFlatArmorModifierIdentifier = 'darkest_flat_armor'
const DarkestFlatArmorModifierUUID = UUID.fromString('00F439CA-4AD9-4B89-B713-A5B63B7327A8')

ServerEvents.tick(event => {
    const server = event.server
    const level = server.getLevel('infinity:darkest_flat')
    if (level == null) return
    const playerList = level.players
    if (level.difficulty.key == 'peaceful') return
    if (level.time % 400 != 0) return
    const persistentData = server.persistentData
    const waveCounter = persistentData.getLong('darkest_wave_counter') + 1
    if (playerList.isEmpty()) {
        if (waveCounter != 0) persistentData.putLong('darkest_wave_counter', 0)
        return
    }
    if (level.getEntities().length > 70) return
    persistentData.putLong('darkest_wave_counter', waveCounter)
    /**@type {WeightRandomModel} */
    const entityWeightList = DarkestFlatWaveEntityMapping.getNearestValue(waveCounter)

    const entityAmount = Math.min(Math.floor(waveCounter / 6), 20) + 5
    const healthModifier = new $AttributeModifier(DarkestFlatHealthModifierUUID, DarkestFlatHealthModifierIdentifier, Math.pow(waveCounter, 1.5), 'multiply_total')
    const attackModifier = new $AttributeModifier(DarkestFlatAttackModifierUUID, DarkestFlatAttackModifierIdentifier, waveCounter * 0.1, 'addition')
    const armorModifier = new $AttributeModifier(DarkestFlatArmorModifierUUID, DarkestFlatArmorModifierIdentifier, waveCounter, 'addition')
    const random = level.getRandom()

    playerList.forEach(/**@param {Player} player*/ player => {
        UpdateDarkestWaveBar(player, waveCounter)
        let playerPos = player.blockPosition()
        let spawnRad = Math.random() * JavaMath.PI * 2
        let distance = Math.floor(Math.random() * 16 + 48)
        let spawnPos = playerPos.offset(Math.cos(spawnRad) * distance, 0, Math.sin(spawnRad) * distance)
        let levelDifficulty = level.getCurrentDifficultyAt(spawnPos)
        let targetChunk = level.getChunk(Math.floor(spawnPos.x / 16), Math.floor(spawnPos.z / 16), 'surface', true)
        let spawnY = targetChunk.getHeight('motion_blocking', spawnPos.x % 16, spawnPos.z % 16) + 1
        if (waveCounter % 10 == 0) {
            /** @type {Internal.PathfinderMob} */
            let entity = DarkestFlatWaveBossWeightModel.getWeightRandom()
            entity.setPos(spawnPos.x, spawnY, spawnPos.z)
            entity.setPersistenceRequired()
            entity.setTarget(player)
            entity.setAggressive(true)
            entity.getAttribute('minecraft:generic.max_health').addPermanentModifier(healthModifier)
            entity.getAttribute('minecraft:generic.attack_damage').addPermanentModifier(attackModifier)
            entity.getAttribute('minecraft:generic.armor').addPermanentModifier(armorModifier)
            entity.persistentData.putLong('waveCount', waveCounter)
            entity.heal(entity.getMaxHealth())
            entity.finalizeSpawn(level, levelDifficulty, 'mob_summoned', null, null)
            level.addFreshEntityWithPassengers(entity)
        } else {
            let entityList = entityWeightList.getWeightRandomRepeatedObjs(entityAmount)
            entityList.forEach(pEntity => {
                /** @type {Internal.PathfinderMob} */
                let entity = level.createEntity(pEntity)
                entity.setAggressive(true)
                entity.setTarget(player)
                entity.setPersistenceRequired()
                entity.setPos(spawnPos.x + random.nextInt(6) - 3, spawnY, spawnPos.z + random.nextInt(6) - 3)
                entity.getAttribute('minecraft:generic.max_health').addPermanentModifier(healthModifier)
                entity.getAttribute('minecraft:generic.attack_damage').addPermanentModifier(attackModifier)
                entity.getAttribute('minecraft:generic.armor').addPermanentModifier(armorModifier)
                entity.heal(entity.getMaxHealth())
                entity.finalizeSpawn(level, levelDifficulty, 'mob_summoned', null, null)
                level.addFreshEntityWithPassengers(entity)
            })
        }
    })
})