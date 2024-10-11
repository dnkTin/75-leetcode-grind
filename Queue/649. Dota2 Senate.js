/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  let allowBanNextR = false
  let allowBanNextD = false
  let r = "R"
  let d = "D"

  for (let i = 0; i < senate.length; i++) {
      let s = senate[i]
      if (s === r && !allowBanNextR) {
          // ban next D
          allowBanNextD = true

      } else if (s === d && !allowBanNextD) {
          allowBanNextR = true
      } else if (i !== senate.length - 1) {
          allowBanNextR = false
          allowBanNextD = false
      }
  }
  return allowBanNextR ? 'Dire' : 'Radiant'
};
console.log(predictPartyVictory("DR")) // Dire