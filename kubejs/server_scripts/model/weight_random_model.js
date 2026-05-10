// priority: 2001
function WeightRandomModel() {
    this.weightRandomList = []
}
WeightRandomModel.prototype = {
    addWeightRandom: function (obj, weight) {
        this.weightRandomList.push(new WeightRandomItem(obj, weight))
        return this
    },
    getWeightRandomObj: function () {
        let totalWeight = this.weightRandomList.reduce(function (pre, cur) {
            return pre + cur.weight
        }, 0)
        let random = Math.random() * totalWeight
        let currentWeight = 0
        for (let i = 0; i < this.weightRandomList.length; i++) {
            currentWeight += this.weightRandomList[i].weight
            if (random < currentWeight) {
                return this.weightRandomList[i].obj
            }
        }
        return null
    },
    getWeightRandomObjs: function (count) {
        let objs = []
        let tempWeightRandomList = this.weightRandomList.slice()
        if (count > tempWeightRandomList.length) {
            count = tempWeightRandomList.length
        }
        let totalWeight = tempWeightRandomList.reduce(function (pre, cur) {
            return pre + cur.weight
        }, 0)
        for (let i = 0; i < count; i++) {
            let random = Math.random() * totalWeight
            let currentWeight = 0
            let selectedIndex = -1
            for (let j = 0; j < tempWeightRandomList.length; j++) {
                currentWeight += tempWeightRandomList[j].weight
                if (random < currentWeight) {
                    selectedIndex = j
                    break
                }
            }
            if (selectedIndex >= 0) {
                objs.push(tempWeightRandomList[selectedIndex].obj)
                totalWeight -= tempWeightRandomList[selectedIndex].weight
                tempWeightRandomList.splice(selectedIndex, 1)
            }
        }
        return objs
    },
    getWeightRandomRepeatedObjs: function (count) {
        let list = this.weightRandomList
        let len = list.length
        let cumulativeWeights = new Array(len)
        let totalWeight = 0
        for (let i = 0; i < len; i++) {
            totalWeight += list[i].weight
            cumulativeWeights[i] = totalWeight
        }
        let randomList = new Array(count)
        for (let i = 0; i < count; i++) {
            randomList[i] = Math.random() * totalWeight
        }
        randomList.sort(function (a, b) { return a - b })
        let objs = new Array(count)
        let ci = 0
        for (let i = 0; i < count; i++) {
            while (ci < len && randomList[i] >= cumulativeWeights[ci]) {
                ci++
            }
            objs[i] = list[ci].obj
        }
        return objs
    }
}


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