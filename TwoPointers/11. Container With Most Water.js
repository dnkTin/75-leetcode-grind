// two pointer
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxResult = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        let currentArea = Math.min(height[left], height[right]) * (right - left)
        maxResult = Math.max(maxResult, currentArea)
        if (height[left] > height[right]) {
            right-- // keep the height of left so we need to move the right
        } else {
            left++ // respectively we move the left 
        }
    }
    return maxResult
};


// non optimize way
var maxArea = function (height) {
    let maxResult = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let currentArea = Math.min(height[i], height[j]) * (j - i)
            maxResult = Math.max(currentArea, maxResult)
        }
    }
    return maxResult
};