// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:god_tinker_heart').maxStackSize(1).maxDamage(1000).tag('kubejs:legend').tag('kubejs:heart').texture('kubejs:item/organs/legend/god_tinker_heart')
    event.create('kubejs:prismarine_crown').maxStackSize(1).texture('kubejs:item/organs/legend/prismarine_crown').tag('kubejs:legend')
    event.create('kubejs:villager_own_you').maxStackSize(1).texture('kubejs:item/organs/legend/villager_own_you').tag('kubejs:legend')
})
