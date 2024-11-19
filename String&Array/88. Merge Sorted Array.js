/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let idx2 = 0
    for (let idx1 = 0; idx1 < m + n; idx1++) {
        if (idx1 < m && nums1[idx1] > nums2[idx2]) {
            // swap 
            let temp = nums1[idx1];
            nums1[idx1] = nums2[idx2];
            nums2[idx2] = temp;
        } 
        if (idx1 >= m) {
            nums1[idx1] = nums2[idx2]
            idx2++
        }
        
    }
    return nums1;
};
merge([4,5,6,0,0,0], 3, [1,2,3], 3)