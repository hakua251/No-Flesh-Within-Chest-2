// priority: 500

StartupEvents.postInit(event => {
    $FuelManager.biogasEngineFuel.put(Fluid.getType('tconstruct:blazing_blood'), new $EngineBronzeFuel(Fluid.getType('tconstruct:blazing_blood'), 150, 1000, 2))
    $FuelManager.biogasEngineFuel.put(Fluid.getType('biomancy:acid'), new $EngineBronzeFuel(Fluid.getType('biomancy:acid'), 300, 1000, 5))
    $FuelManager.biogasEngineFuel.put(Fluid.getType('tconstruct:sky_slime'), new $EngineBronzeFuel(Fluid.getType('tconstruct:sky_slime'), 80, 1000, 1))
    $FuelManager.biogasEngineFuel.put(Fluid.getType('tconstruct:earth_slime'), new $EngineBronzeFuel(Fluid.getType('tconstruct:earth_slime'), 90, 1000, 1))
    $FuelManager.biogasEngineFuel.put(Fluid.getType('tconstruct:ender_slime'), new $EngineBronzeFuel(Fluid.getType('tconstruct:ender_slime'), 100, 1000, 1))
    $FuelManager.biogasEngineFuel.put(Fluid.getType('create:chocolate'), new $EngineBronzeFuel(Fluid.getType('create:chocolate'), 100, 3000, 1))
})

