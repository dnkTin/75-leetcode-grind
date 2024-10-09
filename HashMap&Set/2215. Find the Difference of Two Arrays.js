/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const ans1 = [...s1].filter(n => !s2.has(n));
  const ans2 = [...s2].filter(n => !s1.has(n));
  return [ans1, ans2];
};