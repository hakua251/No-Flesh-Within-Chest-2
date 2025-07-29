// priority: 1000
// 胸腔注射器
/**
 * 
 * @param {Registry.Item} event 
 * @param {*} typeName 
 * @param {*} typeLocation 
 */
function RegistryChestCavityInjection(event, typeName, typeLocation) {
    event.create(`${typeName}_injection`).maxStackSize(1).texture(`kubejs:item/injections/${typeName}_injection`)
        .useDuration(itemStack => 65)
        .useAnimation('none')
        .use((level, player, hand) => {
            if (level.isClientSide()) return true
            if (player.isPlayer()) {
                player.triggerAnimation('kubejs:inject_animation', 3.25, 'linear', true, false)
            }
            return true
        })
        .releaseUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            if (entity.isPlayer()) {
                entity.stopAnimation('kubejs:inject_animation')
            }
            return itemstack
        })
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return Item.empty
            entity.chestCavityInstance.setInventoryType(typeLocation)
            return Item.empty
        })
}


StartupEvents.registry('item', event => {
    RegistryChestCavityInjection(event, 'revolution_machine', 'kubejs:cc_inventory_types/revolution_machine.json')
    RegistryChestCavityInjection(event, 'functional_entity', 'kubejs:cc_inventory_types/functional_entity.json')
    RegistryChestCavityInjection(event, 'gula', 'kubejs:cc_inventory_types/gula.json')
    RegistryChestCavityInjection(event, 'rose', 'kubejs:cc_inventory_types/rose.json')
    RegistryChestCavityInjection(event, 'default', 'kubejs:cc_inventory_types/default.json')
})