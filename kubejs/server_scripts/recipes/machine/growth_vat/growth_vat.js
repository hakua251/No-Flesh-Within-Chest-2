// priority: 500
const GrowthVatOutputSlotsList = ['slot_1', 'slot_2', 'slot_3', 'slot_4', 'slot_5', 'slot_6']
ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine('kubejs:growth_vat', 60)
        .requireFunctionOnEnd(ctx => {
            const machine = ctx.getMachine()
            GrowthVatOutputSlotsList.forEach(pSlotId => {
                let pItem = machine.getItemStored(pSlotId)
                if (!pItem || pItem.isEmpty()) {
                    machine.setItemStored(pSlotId, Item.of('kubejs:unformed_tumor'))
                } else {
                    machine.setItemStored(pSlotId, Item.of('kubejs:tumor'))
                }
            })
            return ctx.success()
        })
        .requireItem('kubejs:simple_culture_medium', 'input_slot')
        .requireFluidPerTick(Fluid.of('kubejs:nutrients_fluid', 1), 'nutrient_solution')
})