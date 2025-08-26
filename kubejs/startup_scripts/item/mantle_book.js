// 脚本类型：STARTUP
MantleJSEvents.bookRegistry(event => {
    event.create('time_anch_beacon')
        .addBookRepository('kubejs:book/time_anch_beacon')
})
StartupEvents.registry('item', event => {
    event.create('kubejs:time_anch_beacon', 'mantle:book')
        .setBookData('time_anch_beacon')
})