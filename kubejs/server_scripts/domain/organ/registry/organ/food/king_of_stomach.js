// priority: 500
RegistryOrgan('kubejs:king_of_stomach')
    .addScore('chestcavity:endurance', -3)
    .addScore('chestcavity:metabolism', 1)

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function KingOfStomachChestCavityUpdate(customData, event, organItem, organIndex, slotType) {
    const entity = event.entity
    const chestCavity = event.chestCavity
    const inventory = chestCavity.inventory
    let onlySet = new Set()
    let healthUp = 0
    let attackUp = 0
    inventory.allItems.forEach(item => {
        if (item.isEmpty()) return
        let foodPro = item.getFoodProperties(entity)
        if (!foodPro) return
        let nutrition = foodPro.getNutrition()
        let staturation = foodPro.getSaturationModifier() * nutrition

        if (!onlySet.has(item.getId())) {
            attackUp = attackUp + staturation / 4
            onlySet.add(item.getId())
        }
        healthUp = healthUp + nutrition / 2
    })
    if (slotType == GulaSlot) {
        healthUp = healthUp * 2
        attackUp = attackUp * 2
    }
    customData.attackDamage.addAttributeModifier(attackUp, 'addition', 'base')
    customData.maxHealth.addAttributeModifier(healthUp, 'addition', 'base')
}


/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function KingOfStomachChestCavityUpdateDefer(customData, event, organItem, organIndex, slotType) {
    const chestCavity = event.chestCavity
    if (slotType == GulaSlot) {
        chestCavity.setOrganScore('chestcavity:ease_of_access', 1)
        chestCavity.setOrganScore('chestcavity:nerves', 2)
        chestCavity.setOrganScore('chestcavity:endurance', 2)
        chestCavity.setOrganScore('chestcavity:breath_capacity', 2)
        chestCavity.setOrganScore('chestcavity:breath_recovery', 2)
        chestCavity.setOrganScore('chestcavity:detoxification', 2)
        chestCavity.setOrganScore('chestcavity:filtration', 2)
    }
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function KingOfStomachTakeOn(customData, event, organItem, organIndex, slotType) {
    const { entity } = event
    if (slotType == GulaSlot && entity instanceof $ServerPlayer) {
        entity.foodData.setNoAddExhaustion(true)
    }
}

/**
 * @param {OrganEventCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function KingOfStomachTakeOff(customData, event, organItem, organIndex, slotType) {
    const { entity } = event
    if (slotType == GulaSlot && entity instanceof $ServerPlayer) {
        entity.foodData.setNoAddExhaustion(false)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:king_of_stomach')
        .addOnlyStrategy('organ_take_on', KingOfStomachTakeOn)
        .addOnlyStrategy('organ_take_off', KingOfStomachTakeOff)
        .addOnlyStrategy('chest_cavity_update', KingOfStomachChestCavityUpdate)
        .addOnlyStrategy('chest_cavity_update', KingOfStomachChestCavityUpdateDefer, -10)
)