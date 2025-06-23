// priority: 999
const ArsEffectResolvePre = new OrganEventModel('ars_effect_resolve_pre')

NativeEvents.onEvent($EffectResolveEventPre,/** @param {Internal.EffectResolveEvent$Pre} event */ event => {
    const shooter = event.shooter
    if (!shooter.isPlayer()) return
    let customData = {}
    ArsEffectResolvePre.run(shooter, customData, [event])
})