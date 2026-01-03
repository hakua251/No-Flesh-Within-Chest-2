// priority: 3000
/**
 * 权重随机对象
 * @param {any} obj 
 * @param {Number} weight
 * @returns 
 */
function WeightRandomItem(obj, weight) {
    this.obj = obj
    this.weight = weight
    this.startWeight = 0
    this.endWeight = 0
}

function WeightRandomModel() {
    this.weightRandomList = []
}
WeightRandomModel.prototype = {
    addWeightRandom: function (obj, weight) {
        this.weightRandomList.push(new WeightRandomItem(obj, weight))
        return this
    },
    getWeightRandomObj: function () {
        let totalWeight = this.weightRandomList.reduce(function (pre, cur, index) {
            cur.startWeight = pre
            return cur.endWeight = pre + cur.weight
        }, 0)
        let random = Math.ceil(Math.random() * totalWeight)
        let randomObj = this.weightRandomList.find(weightObj => weightObj.startWeight < random && weightObj.endWeight >= random)
        return randomObj.obj
    }
}
