// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:ignited_armour').maxDamage(30).maxStackSize(1).texture('kubejs:item/organs/nether/ignited_armour').tag('kubejs:nether').tag('kubejs:liver')
})