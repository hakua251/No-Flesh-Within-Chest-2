// priority: 500
StartupEvents.registry('block', event => {
    // event.create('kubejs:world_computer', 'custommachinery')
    //     .machine('kubejs:world_computer')

    event.create('kubejs:world_packager', 'custommachinery')
        .machine('kubejs:world_packager')
})