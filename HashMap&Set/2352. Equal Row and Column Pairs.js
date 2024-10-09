/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs_1 = function(grid) {
  let n = grid.length
  let setRow = []
  for (let i = 0; i < n; i++) {
      let currentRow = ''
      for (let j = 0; j < n; j++) {
          currentRow += grid[i][j] + '-'
      }
      setRow.push(currentRow)
  }
  let setCol = []
  for (let i = 0; i < n; i++) {
      let currentCol = ''
      for (let j = 0; j < n; j++) {
          currentCol += grid[j][i] + '-'
      }
      setCol.push(currentCol)
  }
  // 321 176 277
  // 312 277 167
  let result = 0
  for (let r of setRow) {
      for (let c of setCol) {
          if ( r === c) {
              result++
          }
      }
  }
  
  return result
};


// rewrite
var equalPairs = function(grid) {
  let count = 0
  let n = grid.length
  let rows = new Map()
  for (let i = 0; i < n; i++) {
    const row = JSON.stringify(grid[i])
    rows.set(row, (rows.get(row) || 0) + 1)
  }

  for (let c = 0; c < n; c++) {
    let col = JSON.stringify(grid.map(row => row[c]))
    count += rows.get(col) || 0
  }
  return count
}