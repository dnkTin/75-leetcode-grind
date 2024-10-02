function canPlaceFlowers(flowerbed, n) {
  if (flowerbed[0] == 0 && flowerbed.length == 1 && n <= 1) { return true}
  if (flowerbed.length == 2 && flowerbed.every(item => item === 0) && n <= 1) return true
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
      n--
      flowerbed[0] = 1
  }
  if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
      n--
      flowerbed[flowerbed.length - 1] = 1
  }
  for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0 
              && flowerbed[i + 1] === 0 
              && flowerbed[i + 2] === 0) {
          flowerbed[i + 1] = 1;
          n--
          i++
      }
  }
  return n <= 0
};

console.log(canPlaceFlowers([0,0,1,0,0]  , 1)) // true