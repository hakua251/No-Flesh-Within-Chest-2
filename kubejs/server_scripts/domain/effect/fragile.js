// priority: 800
/**
 * 实际受伤（过护甲结算）节点，适合用于结算受伤效果
 */
NativeEvents.onEvent($LivingDamageEvent, /** @param {Internal.LivingDamageEvent} event */ event => {
    const entity = event.entity
    if (!entity.hasEffect('kubejs:fragile')) return
    let fragileEffect = entity.getEffect('kubejs:fragile')
    let effectLevel = fragileEffect.getAmplifier() + 1
    event.amount = event.amount * (1 + effectLevel * 0.1)
})
