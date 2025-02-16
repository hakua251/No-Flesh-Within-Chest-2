// priority: 999
/**
 * @type {Object<string, AttributeUUIDModel>}
 */
const AttributeIdentifierMap = {}

/**
 * @param {AttributeUUIDModel} attributeUUID 
 */
function RegistryAttributeIdentifier(attributeUUID) {
    AttributeIdentifierMap[attributeUUID.attributeKey] = attributeUUID
}


RegistryAttributeIdentifier(
    new AttributeUUIDModel('minecraft:generic.attack_damage')
        .setBaseAddUUID('509D0952-B490-4F55-B830-30432295B684')
        .setBaseMultiUUID('24166EEE-AB69-4E7F-98DF-824C5CF42893')
        .setAllMultiUUID('0D08BBF5-1E23-4534-9D54-17C6C37BB956')
)