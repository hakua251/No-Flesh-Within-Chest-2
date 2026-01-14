
// priority: 3000
/**
 * @param {number} x 
 * @param {number} y 
 * @param {number} width 
 * @param {number} height 
 */
function ScreenAreaModel(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}


ScreenAreaModel.prototype = {
    /**
     * @param {number} mouseX
     * @param {number} mouseY
     */
    contains: function (mouseX, mouseY) {
        let top = mouseX >= this.x
        let left = mouseY >= this.y
        let right = mouseX <= this.x + this.width
        let bottom = mouseY <= this.y + this.height
        return top && left && bottom && right
    }
}

