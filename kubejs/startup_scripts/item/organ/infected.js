// priority: 500
StartupEvents.registry('item', event => {
    event.create('kubejs:rotten_appendix').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_appendix').tag('kubejs:appendix')
    event.create('kubejs:rotten_intestine').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_intestine').tag('kubejs:intestine')
    event.create('kubejs:rotten_heart').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_heart').tag('kubejs:heart')
    event.create('kubejs:rotten_kidney').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_kidney').tag('kubejs:kidney')
    event.create('kubejs:rotten_liver').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_liver').tag('kubejs:liver')
    event.create('kubejs:rotten_lung').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_lung').tag('kubejs:lung')
    event.create('kubejs:rotten_muscle').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_muscle').tag('kubejs:muscle')
    event.create('kubejs:rotten_rib').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_rib').tag('kubejs:bone')
    event.create('kubejs:rotten_spine').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_spine').tag('kubejs:spine')
    event.create('kubejs:rotten_spleen').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_spleen').tag('kubejs:spleen')
    event.create('kubejs:rotten_stomach').maxStackSize(1).tag('kubejs:infected').tag('kubejs:basic').texture('kubejs:item/organs/infected/rotten_stomach').tag('kubejs:stomach')

    event.create('kubejs:worm_neuron')
        .maxStackSize(1)
        .texture('kubejs:item/organs/infected/worm_neuron')
        .tag('kubejs:infected')

    event.create('kubejs:tumor')
        .texture('kubejs:item/organs/infected/tumor')
        .maxStackSize(1)
        .tag('kubejs:organ')
        .tag('kubejs:infected')
        .tag('kubejs:tumor')

    event.create('kubejs:unformed_tumor')
        .texture('kubejs:item/organs/infected/unformed_tumor')
        .maxStackSize(1)
        .tag('kubejs:organ')
        .tag('kubejs:infected')
        .tag('kubejs:tumor')

    event.create('kubejs:rosy_tumor')
        .texture('kubejs:item/organs/infected/rosy_tumor')
        .maxStackSize(1)
        .tag('kubejs:organ')
        .tag('kubejs:rose')
        .tag('kubejs:infected')
        .tag('kubejs:tumor')

    event.create('kubejs:malignant_neuron_tumor')
        .texture('kubejs:item/organs/infected/malignant_neuron_tumor')
        .maxDamage(600)
        .maxStackSize(1)
        .tag('kubejs:organ')
        .tag('kubejs:infected')

    event.create('kubejs:parasitic_tumor')
        .overrideStackedOnOther((stack, slot, action, player) => {
            if (stack.getCount() != 1 || action != ClickAction.SECONDARY) return false
            let nbt = stack.getOrCreateTag()
            if (!nbt.contains('organData')) return false
            let oStack = slot.getItem()
            if (oStack.isEmpty()) return false
            if (!oStack.hasTag('kubejs:organ') || oStack.hasTag('kubejs:tumor')) return false
            let organDataNbt = nbt.getCompound('organData')
            if (!oStack.hasNBT()) oStack.setNbt(new $CompoundTag())
            let oNbt = oStack.getNbt()
            oNbt.put('organData', organDataNbt)
            oNbt.putBoolean('Infected', true)
            stack.setCount(0)
            return true
        })
        .texture('kubejs:item/organs/infected/parasitic_tumor')
        .maxStackSize(1)
        .tag('kubejs:organ')
        .tag('kubejs:infected')
        .tag('kubejs:tumor')

    event.create('kubejs:primal_heart')
        .texture('kubejs:item/organs/infected/primal_heart')
        .maxStackSize(1)
        .tag('kubejs:infected')
        .tag('kubejs:heart')

    event.create('kubejs:primal_bone_cage')
        .texture('kubejs:item/organs/infected/primal_bone_cage')
        .maxStackSize(1)
        .tag('kubejs:infected')
        .tag('kubejs:bone')
})