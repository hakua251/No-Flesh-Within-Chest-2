// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:animted_soul').maxStackSize(1).texture('kubejs:item/organs/magic/animted_soul').tag('kubejs:magic')

    event.create('kubejs:shulker_eye').maxStackSize(1).texture('kubejs:item/organs/magic/shulker_eye').tag('kubejs:magic')

    // 星宝石
    event.create('kubejs:whirlisprig_star_gem').maxStackSize(1).texture('kubejs:item/organs/magic/whirlisprig_star_gem').tag('kubejs:magic').tag('kubejs:gem')
    event.create('kubejs:heal_star_gem').maxStackSize(1).texture('kubejs:item/organs/magic/heal_star_gem').tag('kubejs:magic').tag('kubejs:gem')
    event.create('kubejs:deepling_star_gem').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/deepling_star_gem').tag('kubejs:gem')
    event.create('kubejs:drygmy_star_gem').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/drygmy_star_gem').tag('kubejs:gem')
    event.create('kubejs:starbuncle_star_gem').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/starbuncle_star_gem').tag('kubejs:gem')
    event.create('kubejs:bookwyrm_star_gem').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/bookwyrm_star_gem').tag('kubejs:gem')

    event.create('kubejs:soul_cage').maxStackSize(1).maxDamage(50).texture('kubejs:item/organs/magic/soul_cage').tag('kubejs:magic')
    event.create('kubejs:soul_wing').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/soul_wing')
    event.create('kubejs:coral_armor').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/coral_armor')
    event.create('kubejs:deepling_ectoplasm').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/deepling_ectoplasm')
    event.create('kubejs:amethyst_core').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/amethyst_core')
    event.create('kubejs:koboleton_spine').maxStackSize(1).tag('kubejs:magic').tag('kubejs:spine').texture('kubejs:item/organs/magic/koboleton_spine')
    event.create('kubejs:koboleton_rib').maxStackSize(1).tag('kubejs:magic').tag('kubejs:bone').texture('kubejs:item/organs/magic/koboleton_rib')
    event.create('kubejs:koboleton_coccyx').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/koboleton_coccyx')
    event.create('kubejs:aptrgangr_soul').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/aptrgangr_soul')
    event.create('kubejs:draugr_skull').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/draugr_skull')
    event.create('kubejs:hippocamtus_scale').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/hippocamtus_scale')
    event.create('kubejs:calamity_bone_spur').maxStackSize(1).tag('kubejs:magic').tag('kubejs:bone').texture('kubejs:item/organs/magic/calamity_bone_spur')
    event.create('kubejs:potion_skin').maxStackSize(1).tag('kubejs:magic').texture('kubejs:item/organs/magic/potion_skin')
    event.create('kubejs:source_resonator').maxStackSize(1).maxDamage(100).texture('kubejs:item/organs/magic/source_resonator').tag('kubejs:magic')

    event.create('kubejs:witch_stomach')
        .overrideOtherStackedOnMe((stack, oStack, slot, action, player, access) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY || !slot.allowModification(player)) return false
            if (oStack.isEmpty()) {
                RemoveBundleOneStack(stack).ifPresent(pStack => {
                    PlayBundleRemoveSound(player)
                    access.set(pStack)
                })
            } else if (!$PotionUtils.getPotion(oStack).effects.isEmpty()) {
                let added = AddItemIntoBundle(stack, oStack, 1, (pStack) => 1)
                if (added > 0) {
                    PlayerBundleInsertSound(player)
                    oStack.shrink(added)
                }
            }
            return true
        })
        .overrideStackedOnOther((stack, slot, action, player) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY) return false
            let oStack = slot.getItem()
            if (oStack.isEmpty()) {
                PlayBundleRemoveSound(player)
                RemoveBundleOneStack(stack).ifPresent((pStack) => slot.safeInsert(pStack))
            } else if (!$PotionUtils.getPotion(oStack).effects.isEmpty()) {
                let added = AddItemIntoBundle(stack, slot.safeTake(oStack.getCount(), 65535, player), 1, (pStack) => 1)
                if (added > 0) PlayerBundleInsertSound(player)
            }
            return true
        })
        .barWidth((stack) => {
            let stackList = GetBundleContents(stack)
            return Math.min(1 + 12 * stackList.length, 13)
        })
        .barColor(() => Color.DARK_BLUE)
        .tooltipImage((stack) => {
            let itemList = $NonNullList.create()
            GetBundleContents(stack).forEach((pStack) => itemList.add(pStack))
            return Optional.of(new $BundleTooltip(itemList, GetBundleCountentWeight(stack, (pStack) => 1)))
        })
        .canFitInsideContainerItems(false)
        .texture('kubejs:item/organs/nature/witch_stomach')
        .maxStackSize(1)
        .tag('kubejs:magic')
        .tag('kubejs:stomach')
})