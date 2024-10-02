function productExceptSelf(nums) {
  const product = nums.reduce((accumulator, currentValue) =>  {
      if (currentValue) {
          accumulator *= currentValue
      }
      return accumulator
  }
  , 1)
  let countZero = 0
  let index = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
          countZero++
      }
  }
  if (countZero > 1) {
      return nums.fill(0)
  }
  if (countZero == 1) {
      return nums.map((num) => {
          if (num != 0) return 0
          else return product
      })
  }
return nums.map((num) => {
  return product / num
})
};