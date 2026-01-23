// priority: 1000
StartupEvents.registry('item', event => {
    event.create('sawdust').texture('kubejs:item/materials/sawdust').maxStackSize(64).burnTime(400)
    event.create('source_focus_crystal').texture('kubejs:item/materials/source_focus_crystal').maxStackSize(1)
    event.create('exhausted_source_focus_crystal').texture('kubejs:item/materials/exhausted_source_focus_crystal').maxStackSize(1)
})