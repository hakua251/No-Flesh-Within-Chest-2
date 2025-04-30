// priority: 500
RegistryOrgan('kubejs:breast_gland')
    .addScore('chestcavity:breath_capacity', 1)
    .addScore('chestcavity:knockback_resistant', -1)



/**
* @param {OrganChestCavityUpdateStrategyCustomData} customData
* @param {Internal.ItemEntityInteractedEventJS} event
* @param {Internal.ItemStack} organItem
* @param {number} organIndex
* @param {string} slotType
*/
function BreastGlandEntityBeInteracted(customData, event, organItem, organIndex, slotType) {
    const item = event.item
    const hand = event.hand
    /**@type {Internal.ServerPlayer} */
    const entity = event.entity
    if (item.id != 'minecraft:bucket') return
    let bucketItem = Item.of('minecraft:milk_bucket')
    entity.setItemInHand(hand, bucketItem.withName(Text.translate('item_name.kubejs.breast_gland_bucket.name', entity.getName())))
}

RegistryOrganStrategy(
    new OrganStrategyModel('kubejs:breast_gland')
        .addOnlyStrategy('entity_be_interacted', BreastGlandEntityBeInteracted)
)