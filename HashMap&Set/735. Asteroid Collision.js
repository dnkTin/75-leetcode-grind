/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let stk = []
let i = 0
while (i < asteroids.length) {
    // init stk or not collision
    if ((stk[stk.length - 1] && stk[stk.length - 1] * asteroids[i] >= 0) || !stk.length || 
      (stk[stk.length - 1] < 0 && asteroids[i] > 0)) {
        stk.push(asteroids[i])
    } else {
        // collision

        while (1) {
            if (stk[stk.length -1] * asteroids[i] > 0) {
              break
            } else if (asteroids[i] >= 0 && Math.abs(stk[stk.length - 1]) == Math.abs(asteroids[i])) {
              stk.push(asteroids[i])
            } else if (Math.abs(stk[stk.length - 1]) <= Math.abs(asteroids[i])) {
                stk.pop()
            } else {
                break
            }
            
        }
    }
    i++
}
return stk
};
console.log(asteroidCollision([-2,-2,1,-2]))