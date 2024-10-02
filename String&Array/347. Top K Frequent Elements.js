/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // 1. Build a hashmap
  // 2. Build a heap
  const map = {}

  // can do with new set
  for (let i = 0; i < nums.length; i++) {
      if (map.hasOwnProperty(nums[i])) {
          map[nums[i]]++ 
      } else {
          map[nums[i]] = 1
      }
  }

  // need to build a heap
  return Object.entries(map).filter(([key, value]) => value >= k).map(([key, value]) => key)
};