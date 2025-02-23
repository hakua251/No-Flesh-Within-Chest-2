// priority: 500
ItemEvents.rightClicked('kubejs:advanced_chest_opener', event => {
    const player = event.player
    const item = event.item
    let teleOpener = item.enchantments.containsKey('kubejs:tele_operation')
    let dist = 5
    if (teleOpener) {
        let teleOpenerLevel = item.getEnchantmentLevel('kubejs:tele_operation')
        dist = Math.min(dist + teleOpenerLevel * 3, 20)
    }
    let ray = player.rayTrace(dist, false)
    let target = player
    let selfTag = true
    let safeOpener = item.enchantments.containsKey('kubejs:safe_operation')
    if (ray.entity && ray.entity.isAlive() && !ray.entity.isPlayer()) {
        selfTag = false
        target = ray.entity
    } else if (safeOpener) {
        return
    }

    AdvancedChstOpenerOpenChestCavity(player, item, target, selfTag)
})


ItemEvents.entityInteracted('kubejs:advanced_chest_opener', event => {
    const player = event.player
    const target = event.target
    const item = event.item
    let selfTag = false
    AdvancedChstOpenerOpenChestCavity(player, item, target, selfTag)
})


/**
 * 
 * @param {Internal.ServerPlayer} player 
 * @param {Internal.ItemStack} item 
 * @param {Internal.LivingEntity} target 
 * @param {boolean} selfTag 
 */
function AdvancedChstOpenerOpenChestCavity(player, item, target, selfTag) {
    player.swing()
    let painlessOpener = item.enchantments.containsKey('kubejs:painless_operation')
    let creativeOpener = item.enchantments.containsKey('kubejs:creative_operation')
    let cc = target.chestCavityInstance
    cc.inventory.setInstance(cc)
    if (target.isAlive()) {
        if (cc.getChestCavityType().isOpenable(cc) || creativeOpener || selfTag) {
            if (!cc.getOrganScore('chestcavity:ease_of_acess') > 0 && !painlessOpener) {
                target.attack(player.damageSources().generic(), 4)
            }

            cc.ccBeingOpened = cc
            player.getChestCavityInstance().ccBeingOpened = cc

            let invName = Text.of(target.getDisplayName().getString())
                .append(Text.translatable('gui.kubejs.title.name.suffix'))
                .append(Text.translatable('gui.kubejs.title.chestcavity'))

            player.openMenu(new $SimpleMenuProvider((i, playerInventory, playerEntity) => {
                return new $ChestCavityScreenHandler(i, playerInventory, cc.owner)
            }, invName))

        } else {
            if (!target.getEquipment('chest').isEmpty()) {
                player.setStatusMessage(Text.translatable('status_msg.kubejs.chestopener.fail.obstructed'))
            } else {
                player.setStatusMessage(Text.translatable('status_msg.kubejs.chestopener.fail.healthy'))
            }
        }
    } 
}