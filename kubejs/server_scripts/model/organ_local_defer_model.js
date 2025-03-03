// priority: 3000
/**
 * 
 * @param {any[]} customArg 当心自指引发stackOverflow，请不要用该args传递customData本身！会在处理阶段进行unshift！
 * @param {function} func 
 * @param {number} priority 默认请传入organIndex
 * @returns 
 */
function OrganLocalDeferModel(customArg, func, priority) {
    this.arg = customArg
    this.func = func
    this.priority = priority
    return this
}