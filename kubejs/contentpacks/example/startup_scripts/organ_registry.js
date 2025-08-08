// priority: 1000
StartupEvents.registry('item', event => {
    event.create('example:test').maxStackSize(1).texture('example:item/test')
})