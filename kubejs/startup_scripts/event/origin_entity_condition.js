/**
 * 双端事件，startup分发
 */
ApoliEvents.originEntityCondition(event => {
    if (event.getLevel().isClientSide()) {
        global.OriginEntityConditionClientEvent(event)
    } else {
        global.OriginEntityConditionServerEvent(event)
    }
})