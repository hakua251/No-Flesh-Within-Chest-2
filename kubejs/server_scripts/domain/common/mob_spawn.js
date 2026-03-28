// priority: 499
const FinalMaxHealthModifierUUID = 'D5095DD1-5A39-46D1-A4B9-3AAA81A2AC23'
const FinalAttackDamageModifierUUID = 'DBE0F5BA-8BC8-4167-871C-208AC94810A0'
const FinalArrowDamageModifierUUID = 'A1587239-B965-4301-B6C5-C73388389166'
// todo
EntityEvents.spawned(event => {
    /**@type {Internal.LivingEntity} */
    const entity = event.entity
    if (!entity || !entity.isLiving() || !entity.isMonster()) return
    const server = event.server
    if (!AStages.serverHasStage('ftb_final_timer_start', server)) return

    const entityNbt = entity.persistentData
    if (entityNbt.getBoolean('after_spawned')) return
    const finalTimerCount = GetLeaderBoardTotal(global.STAT_FINAL_TIMER, server)

    if (AStages.serverHasStage('ftb_spawned_linear_incr', server)) {
        let maxHealthAttr = entity.getAttribute('minecraft:generic.max_health')
        if (maxHealthAttr) {
            maxHealthAttr.addPermanentModifier(new $AttributeModifier(FinalMaxHealthModifierUUID, 'FinalMaxHealthModifier', 0.1 * finalTimerCount, $Operation.MULTIPLY_TOTAL))
        }
        let attackDamageAttr = entity.getAttribute('minecraft:generic.attack_damage')
        if (attackDamageAttr) {
            attackDamageAttr.addPermanentModifier(new $AttributeModifier(FinalAttackDamageModifierUUID, 'FinalAttackDamageModifier', 0.5 * finalTimerCount, $Operation.ADDITION))
        }
        let arrowDamageAttr = entity.getAttribute('attributeslib:arrow_damage')
        if (arrowDamageAttr) {
            arrowDamageAttr.addPermanentModifier(new $AttributeModifier(FinalArrowDamageModifierUUID, 'FinalArrowDamageModifier', 0.5 * finalTimerCount, $Operation.ADDITION))
        }
    } else if (AStages.serverHasStage('', server)) {}


    entityNbt.putBoolean('after_spawned', true)
})