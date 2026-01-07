// priority: 500
RegistryOrgan('kubejs:worm_larva')
    .addScore('chestcavity:filtration', 1)
    .addScore('chestcavity:endurance', -1)

/**
 * @param {OrganChestCavityUpdateStrategyCustomData} customData
 * @param {Internal.FoodEatenEventJS} event
 * @param {Internal.ItemStack} organItem
 * @param {number} organIndex
 * @param {string} slotType
 */
function ParasiteLarvaFoodEaten(customData, event, organItem, organIndex, slotType) {
    const player = event.getPlayer()
    const item = event.getItem()
    if (!organItem.hasNBT()) {
        organItem.setNbt(new $CompoundTag())
    }
    let nbt = organItem.getNbt()
    let saturation = nbt.getFloat('saturation')

    let foodProperties = item.getFoodProperties(player)
    let foodHunger = foodProperties.getNutrition()
    let foodSaturation = foodProperties.getSaturationModifier() * foodHunger
    let curSaturation = saturation + foodSaturation
    nbt.putFloat('saturation', curSaturation)
    let curDamage = organItem.getDamageValue() - foodHunger
    if (curDamage <= 0) {
        let ratio = curSaturation / (organItem.getMaxDamage() - curDamage)
        if (ratio >= 1) {
            // 大胃王路线
            let chestCavity = player.getChestCavityInstance()
            if (!chestCavity) return
            let invTypeData = chestCavity.getInventoryTypeData()
            let ccInv = chestCavity.inventory
            let aroundRelativeSlots = GetEightDirectionRelativeSlot(invTypeData, organIndex)
            for (let slotDefinition of aroundRelativeSlots) {
                let pItem = ccInv.getStackInSlot(slotDefinition.getId())
                if (pItem.isEmpty() || !pItem.hasTag('kubejs:stomach')) continue
                let replaceItem = Item.of('kubejs:king_of_stomach')
                RemoveChestCavityOrgan(customData, player.chestCavityInstance, organIndex, slotType, true)
                SetChestCavityOrgan(customData, player.chestCavityInstance, replaceItem, slotDefinition.getId(), slotDefinition.getType(), true)
                return
            }
        }
        // 美味虫
        let replaceItem = Item.of('kubejs:worm_of_taste')
        SetChestCavityOrgan(customData, player.chestCavityInstance, replaceItem, organIndex, slotType, false)
    } else {
        organItem.setDamageValue(curDamage)
    }
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:worm_larva')
        .addOnlyStrategy('food_eaten', ParasiteLarvaFoodEaten)
)