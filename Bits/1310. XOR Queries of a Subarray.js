/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let result = []
    for (let query of queries) {
        let xorResult = 0
        let count = query[0]
        while (count <= query[1]) {
            xorResult ^= arr[count]
            
            count++
        }
        result.push(xorResult)
    }
    return result
};