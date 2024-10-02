function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    
const findMaximumCandy = (candies: number[]) => {
      let maxCandy = candies[0]
      for (let i = 0; i < candies.length; i++) {
          if (candies[i] > maxCandy) {
              maxCandy = candies[i]
          }
      }
      return maxCandy
  }

  const maxCandy = findMaximumCandy(candies)
  const result: boolean[] = []
  for (let i = 0; i < candies.length; i++) {
      result.push(candies[i] + extraCandies > maxCandy)
  }
  
  return result  
};