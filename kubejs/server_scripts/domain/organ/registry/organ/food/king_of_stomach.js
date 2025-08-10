// priority: 500
RegistryOrgan('kubejs:king_of_stomach')
    .addScore('chestcavity:endurance', -3)
    .addScore('chestcavity:nutrition', -1)
    .addScore('chestcavity:metabolism', 1)

const CakeFoodProperties = { 'minecraft:cake': { 'nutrition': 14, 'saturation': 2.8 }, 'bakery:strawberry_cake': { 'nutrition': 20, 'saturation': 14 }, 'bakery:sweetberry_cake': { 'nutrition': 20, 'saturation': 14 }, 'bakery:chocolate_cake': { 'nutrition': 20, 'saturation': 14 }, 'bakery:chocolate_gateau': { 'nutrition': 20, 'saturation': 14 }, 'bakery:bundt_cake': { 'nutrition': 20, 'saturation': 14 }, 'bakery:linzer_tart': { 'nutrition': 20, 'saturation': 14 }, 'bakery:apple_pie': { 'nutrition': 20, 'saturation': 14 }, 'bakery:glowberry_tart': { 'nutrition': 20, 'saturation': 14 }, 'bakery:chocolate_tart': { 'nutrition': 20, 'saturation': 14 }, 'bakery:pudding': { 'nutrition': 20, 'saturation': 14 }, 'create:blaze_cake': { 'nutrition': 18, 'saturation': 18 }, 'create:creative_blaze_cake': { 'nutrition': 24, 'saturation': 48 }, 'tconstruct:earth_cake': { 'nutrition': 12, 'saturation': 24 }, 'tconstruct:sky_cake': { 'nutrition': 12, 'saturation': 24 }, 'tconstruct:ichor_cake': { 'nutrition': 12, 'saturation': 24 }, 'tconstruct:ender_cake': { 'nutrition': 12, 'saturation': 24 }, 'tconstruct:magma_cake': { 'nutrition': 12, 'saturation': 24 }, 'tconstruct:ender_cake': { 'nutrition': 12, 'saturation': 24 }, 'tconstruct:blood_cake': { 'nutrition': 12, 'saturation': 24 } }

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
    const level = event.level
    let onlySet = new Set()
    let healthUp = 0
    let attackUp = 0
    const sweetsGlandEffect = GetCustomDataOrDefault(customData, 'hasSweetsGland', 0)
    const beerGlandEffect = GetCustomDataOrDefault(customData, 'hasBeerGland', 0)

    inventory.allItems.forEach(item => {
        if (item.isEmpty()) return
        let itemId = String(item.getId())
        if (!onlySet.has(itemId)) {
            let isGreedy = false
            if (item.hasNBT()) {
                let nbt = item.getNbt()
                if (nbt.contains('greedyThroatUUID')) isGreedy = true
            }
            if (item.hasTag('kubejs:cake') && sweetsGlandEffect == 2) {
                let foodPro = CakeFoodProperties[item.getId().toString()]
                if (!foodPro) return

                attackUp = attackUp + foodPro.saturation * 2
                healthUp = healthUp + foodPro.nutrition / 4
            } else if (item.hasTag('kubejs:sweets') && sweetsGlandEffect >= 1) {
                let foodPro = item.getFoodProperties(entity)
                if (!foodPro) return
                let nutrition = foodPro.getNutrition() + (isGreedy ? 2 : 0)
                let staturation = foodPro.getSaturationModifier() * nutrition

                attackUp = attackUp + staturation * 2
                healthUp = healthUp + nutrition / 4
            } else if (item.hasTag('kubejs:beer') && beerGlandEffect >= 1) {
                let foodPro = item.getFoodProperties(entity)
                if (!foodPro) return
                let nutrition = foodPro.getNutrition() + (isGreedy ? 2 : 0)
                let staturation = foodPro.getSaturationModifier() * nutrition
                attackUp = attackUp + staturation * 2 + nutrition * 2
                if (beerGlandEffect == 2) {
                    // 允许重复放置
                    return
                }
            } else if (item.hasTag('kubejs:wine') && beerGlandEffect == 2) {
                let age = $WineYears.getWineAge(item, level)
                attackUp = attackUp + 1 * age
            } else {
                let foodPro = item.getFoodProperties(entity)
                if (!foodPro) return
                let nutrition = foodPro.getNutrition() + (isGreedy ? 2 : 0)

                let staturation = foodPro.getSaturationModifier() * nutrition
                attackUp = attackUp + staturation / 2
                healthUp = healthUp + nutrition / 4

            }
            onlySet.add(itemId)
        }

    })
    if (slotType == GulaSlot) {
        attackUp = attackUp * 2
        healthUp = healthUp * 2
    }
    customData.attackDamage.addAttributeModifier(attackUp, 'addition', 'base')
    customData.maxHealth.addAttributeModifier(healthUp, 'addition', 'base')
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


/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function KingOfStomachMpmTakeOn(customData, event, organItem, organIndex, slotType) {
    switch (GetOrganItemMPMType(organItem)) {
        case OrganItemMPMTypeShow: {
            let leftArmPartId = 'kubejs:parts/arms/king_of_stomach_left_arm_slim_model.json'
            let rightArmPartId = 'kubejs:parts/arms/king_of_stomach_right_arm_slim_model.json'
            let bodyPartId = 'kubejs:parts/body/king_of_stomach_body_model.json'
            let bodyIndex = customData.modelData.mpmParts.findIndex(mpmData => mpmData.partId.toString() == bodyPartId)
            if (bodyIndex == -1) {
                customData.modelData.mpmParts.add(new MpmDataModel(bodyPartId).exportModelData())
            }

            let leftArmIndex = customData.modelData.mpmParts.findIndex(mpmData => mpmData.partId.toString() == leftArmPartId)
            if (leftArmIndex == -1) {
                customData.modelData.mpmParts.add(new MpmDataModel(leftArmPartId).exportModelData())
            }
            let rightArmIndex = customData.modelData.mpmParts.findIndex(mpmData => mpmData.partId.toString() == rightArmPartId)
            if (rightArmIndex == -1) {
                customData.modelData.mpmParts.add(new MpmDataModel(rightArmPartId).exportModelData())
            }
            return
        }
        default:
            return
    }
}

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.EvaluateChestCavityJS} event 
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 */
function KingOfStomachMpmTakeOff(customData, event, organItem, organIndex, slotType) {
    let leftArmPartId = 'kubejs:parts/arms/king_of_stomach_left_arm_slim_model.json'
    let rightArmPartId = 'kubejs:parts/arms/king_of_stomach_right_arm_slim_model.json'
    let bodyPartId = 'kubejs:parts/body/king_of_stomach_body_model.json'
    customData.modelData.mpmParts.removeIf(mpmData => (mpmData.partId.toString() == bodyPartId) || (mpmData.partId.toString() == leftArmPartId) || (mpmData.partId.toString() == rightArmPartId))

}


RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:king_of_stomach')
        .addOnlyStrategy('organ_take_on', KingOfStomachTakeOn)
        .addOnlyStrategy('organ_take_off', KingOfStomachTakeOff)
        .addOnlyStrategy('chest_cavity_update', KingOfStomachChestCavityUpdate)
        .addOnlyStrategy('mpm_render_take_on', KingOfStomachMpmTakeOn)
        .addOnlyStrategy('mpm_render_take_off', KingOfStomachMpmTakeOff)
)

ServerEvents.recipes(event => {
    event.shapeless(GetOrganItemWithMPMType(Item.of('kubejs:king_of_stomach'), OrganItemMPMTypeShow), ['kubejs:plastic_stem_cells', 'kubejs:king_of_stomach', Ingredient.of('#forge:dyes/white')])
})