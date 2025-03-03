// priority: 500
RegistryOrgan('kubejs:furnace_core')
    .addScore('chestcavity:knockback_resistant', 0.5)
    .addScore('chestcavity:health', 2)

RegistryOrgan('kubejs:burning_heart')
    .addScore('chestcavity:knockback_resistant', 0.5)
    .addScore('chestcavity:health', 2)

const FurnaceCoreTempAttackUpUUID = UUID.fromString('858D6175-7E75-41BC-9E70-A42AAFE7A337')
/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OpenedEntityTickJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FurnaceCoreEntityTickDefer(customData, event, organItem, organIndex, slotType) {
    const { entity, chestCavity } = event
    let attributeInstance = event.entity.getAttribute('minecraft:generic.attack_damage')
    /**@type {number} */
    let value = 0
    if (!attributeInstance) return
    if (organItem.getDamageValue() + 1 <= organItem.getMaxDamage()) {
        organItem.setDamageValue(organItem.getDamageValue() + 1)
        value = 1
        let oldModifier = attributeInstance.getModifier(FurnaceCoreTempAttackUpUUID)
        if (oldModifier) value = oldModifier.amount + value

        let attributeModifier = new $AttributeModifier(FurnaceCoreTempAttackUpUUID, 'FurnaceCoreTempAttackUp', value, $Operation.ADDITION)

        attributeInstance.removeModifier(FurnaceCoreTempAttackUpUUID)
        attributeInstance.addTransientModifier(attributeModifier)
        chestCavity.customEntityDataMap.put('isFurnaceCore', true)
    } else {
        value = -3
        let oldModifier = attributeInstance.getModifier(FurnaceCoreTempAttackUpUUID)
        if (oldModifier) value = Math.min(oldModifier.amount + value, 0)

        attributeInstance.removeModifier(FurnaceCoreTempAttackUpUUID)
        if (value <= 0) return
        let attributeModifier = new $AttributeModifier(FurnaceCoreTempAttackUpUUID, 'FurnaceCoreTempAttackUp', value, $Operation.ADDITION)
        attributeInstance.addTransientModifier(attributeModifier)
    }
    if (entity instanceof $ServerPlayer) {
        let organEffect = new OragnEffectModel(organItem).setPriority(100).setCustomText((organItem.getMaxDamage() - organItem.getDamageValue()).toFixed(0))
        SetOrganEffect(chestCavity, organEffect)
    }
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OpenedEntityTickJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FurnaceCoreEntityTick(customData, event, organItem, organIndex, slotType) {
    customData.localDefer.push(new OrganLocalDeferModel([event, organItem, organIndex, slotType], FurnaceCoreEntityTickDefer, organIndex))
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FurnaceCoreDoDamage(customData, event, organItem, organIndex, slotType) {
    /**@type {Internal.LivingEntity} */
    const sourceEntity = event.source.actual
    const chestCavity = sourceEntity.chestCavityInstance
    let damageValue = Math.min(2 + chestCavity.customEntityDataMap.getOrDefault('furnaceCoreRelay', 0), 5)
    if (organItem.getDamageValue() > damageValue) {
        organItem.setDamageValue(organItem.getDamageValue() - damageValue)
        if (sourceEntity instanceof $ServerPlayer) {
            let organEffect = new OragnEffectModel(organItem).setPriority(100).setCustomText((organItem.getMaxDamage() - organItem.getDamageValue()).toFixed(0))
            SetOrganEffect(chestCavity, organEffect)
        }
    } else {
        let replaceItem = Item.of('kubejs:burning_heart')
        SetOrganWithoutUpdate(customData, chestCavity, replaceItem, organIndex, slotType)
        chestCavity.customEntityDataMap.put('isBurningHeart', true)
        chestCavity.customEntityDataMap.put('isFuranceCore', false)
        if (sourceEntity instanceof $ServerPlayer) {
            let organEffect = new OragnEffectModel(replaceItem).setPriority(100).setCustomText((replaceItem.getMaxDamage() - replaceItem.getDamageValue()).toFixed(0))
            SetOrganEffect(chestCavity, organEffect)
            RemoveOrganEffect(chestCavity, 'kubejs:furnace_core')
        }
    }
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function FurnaceCoreTakeOff(customData, event, organItem, organIndex, slotType) {
    const { entity, chestCavity } = event
    let attributeInstance = entity.getAttribute('minecraft:generic.attack_damage')
    if (!attributeInstance) return
    attributeInstance.removeModifier(FurnaceCoreTempAttackUpUUID)
    chestCavity.customEntityDataMap.put('isFuranceCore', false)
    if (entity instanceof $ServerPlayer) {
        RemoveOrganEffect(chestCavity, 'kubejs:furnace_core')
    }
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:furnace_core')
        .addOnlyStrategy('entity_tick', FurnaceCoreEntityTick)
        .addOnlyStrategy('organ_take_off', FurnaceCoreTakeOff)
        .addOnlyStrategy('entity_do_damage', FurnaceCoreDoDamage)
)

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OpenedEntityTickJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function BurningCoreEntityTickDefer(customData, event, organItem, organIndex, slotType) {
    const { entity, chestCavity } = event
    let attributeInstance = event.entity.getAttribute('minecraft:generic.attack_damage')
    let damageValue = Math.max(10 - chestCavity.customEntityDataMap.getOrDefault('burningHeartDelay', 0), 5)
    if (!attributeInstance) return
    if (organItem.getDamageValue() + damageValue <= organItem.getMaxDamage()) {
        organItem.setDamageValue(organItem.getDamageValue() + damageValue)
        chestCavity.customEntityDataMap.put('isBurningHeart', true)
        if (entity instanceof $ServerPlayer) {
            let organEffect = new OragnEffectModel(organItem).setPriority(100).setCustomText((organItem.getMaxDamage() - organItem.getDamageValue()).toFixed(0))
            SetOrganEffect(chestCavity, organEffect)
        }
    } else {
        let replaceItem = Item.of('kubejs:furnace_core')
        replaceItem.setDamageValue(100)
        SetOrganWithoutUpdate(customData, event.chestCavity, replaceItem, organIndex, slotType)
        chestCavity.customEntityDataMap.put('isFurnaceCore', true)
        chestCavity.customEntityDataMap.put('isBurningHeart', false)
        if (entity instanceof $ServerPlayer) {
            let organEffect = new OragnEffectModel(replaceItem).setPriority(100).setCustomText((replaceItem.getMaxDamage() - replaceItem.getDamageValue()).toFixed(0))
            SetOrganEffect(chestCavity, organEffect)
            RemoveOrganEffect(chestCavity, 'kubejs:burning_heart')
        }
    }
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.OpenedEntityTickJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function BurningCoreEntityTick(customData, event, organItem, organIndex, slotType) {
    customData.localDefer.push(new OrganLocalDeferModel([event, organItem, organIndex, slotType], BurningCoreEntityTickDefer, organIndex))
}


/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.LivingHurtEvent} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function BurningCoreDoDamage(customData, event, organItem, organIndex, slotType) {
    let damageBoost = GetCustomDataOrDefault(customData, 'burningItemDamageBoost', 0)
    let multiplierBoost = GetCustomDataOrDefault(customData, 'burningItemMultiplierBoost', 0)
    event.amount = (event.amount + damageBoost) * (2 + multiplierBoost)
}


/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function BurningCoreTakeOff(customData, event, organItem, organIndex, slotType) {
    const { entity, chestCavity } = event
    let attributeInstance = entity.getAttribute('minecraft:generic.attack_damage')
    if (!attributeInstance) return
    attributeInstance.removeModifier(FurnaceCoreTempAttackUpUUID)
    chestCavity.customEntityDataMap.put('isBurningHeart', false)
    if (entity instanceof $ServerPlayer) {
        RemoveOrganEffect(chestCavity, 'kubejs:burning_heart')
    }
}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:burning_heart')
        .addOnlyStrategy('entity_tick', BurningCoreEntityTick)
        .addOnlyStrategy('organ_take_off', BurningCoreTakeOff)
        .addOnlyStrategy('entity_do_damage', BurningCoreDoDamage)
)
