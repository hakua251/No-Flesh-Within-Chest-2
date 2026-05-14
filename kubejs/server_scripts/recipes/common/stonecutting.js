// priority: 1000
ServerEvents.recipes(event => {
    event.stonecutting('kubejs:rib_blade', '#kubejs:bone')
    event.stonecutting(Item.of('kubejs:eternal_oath'), '#forge:gems/diamond')
})