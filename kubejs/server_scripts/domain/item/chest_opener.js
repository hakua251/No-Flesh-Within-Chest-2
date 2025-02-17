// priority: 500
ItemEvents.rightClicked('kubejs:advanced_chest_opener', event => {
    const player = event.player
    const level = event.level
    let teleOpener = event.item.enchantments.containsKey('kubejs:tele_operation')
    let dist = 5
    if (teleOpener) {
        let teleOpenerLevel = event.item.getEnchantmentLevel('kubejs:tele_operation')
        dist = Math.min(dist + teleOpenerLevel * 3, 20)
    }
    let ray = player.rayTrace(dist, false)
    let target = player
    let selfTag = true
    let safeOpener = event.item.enchantments.containsKey('kubejs:safe_operation')
    if (ray.entity && ray.entity.isAlive() && !ray.entity.isPlayer()) {
        selfTag = false
        target = ray.entity
    } else if (safeOpener) {
        return
    }

    if (target.type == 'iceandfire:fire_dragon' || target.type == 'iceandfire:ice_dragon' || target.type == 'iceandfire:lightning_dragon') {
        let getAgeTicks = target.nbt.AgeTicks
        let getDeathStage = target.nbt.DeathStage
        let curStage = ((getAgeTicks / 24000) / 5) / 2
        if (getDeathStage + 1 >= curStage) return
    }

    player.swing()
    let painlessOpener = event.item.enchantments.containsKey('kubejs:painless_operation')
    let creativeOpener = event.item.enchantments.containsKey('kubejs:creative_operation')

    if (target.isAlive()) {
        let cc = target.chestCavityInstance
        if (cc.getChestCavityType().isOpenable(cc) || creativeOpener || selfTag) {
            if (!cc.getOrganScore('chestcavity:ease_of_acess') > 0 && !painlessOpener) {
                target.attack(level.damageSources().generic(), 4)
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
                player.playSound('minecraft:chain_hit', 0.75, 1.0)
            } else {
                player.setStatusMessage(Text.translatable('status_msg.kubejs.chestopener.fail.healthy'))
                player.playSound('minecraft:armor_equip_turtle', 0.75, 1.0)
            }
        }
    }
})