// priority: 3000
/**
 * 
 * @param {Internal.ItemStack} cameraStack 
 * @returns {String[]}
 */
function ExposureGetAttachmentIds(cameraStack) {
    /**@type {Internal.CameraItem} */
    let camera = cameraStack.getItem()
    let attachmentList = []
    camera.getAttachments().forEach(attachmentType => {
        let attachmentItem = attachmentType.get(cameraStack)
        if (attachmentItem && !attachmentItem.isEmpty()) {
            attachmentList.push(attachmentItem.item.id.toString())
        }
    })
    return attachmentList
}