/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/single-number-ii/submissions/

var singleNumber = function(nums) {
    let sorted = nums.sort((a, b) => a - b);
    for (let x = 0; x < sorted.length; x += 3) {
        if (nums[x] !== nums[x + 1]) {
            return nums[x];
        }
    }
};