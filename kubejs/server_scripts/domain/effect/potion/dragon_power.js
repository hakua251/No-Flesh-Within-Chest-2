// priority: 800
/**
 * 实际受伤（过护甲结算）节点，适合用于结算受伤效果
 */
NativeEvents.onEvent($LivingDamageEvent, /** @param {Internal.LivingDamageEvent} event */ event => {
    const entity = event.entity
    if (!entity.hasEffect('kubejs:dragon_power')) return
    let dragonPowerEffect = entity.getEffect('kubejs:dragon_power')
    let amplifier = dragonPowerEffect.getAmplifier()
    let curAbsorption = entity.absorptionAmount + amplifier + 2
    if (curAbsorption > entity.maxHealth * 3) curAbsorption = entity.maxHealth * 3
    entity.absorptionAmount = curAbsorption
})