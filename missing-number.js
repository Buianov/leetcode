/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode.com/problems/missing-number/submissions/


var missingNumber = function(nums) {
   const max = nums.length;
    let numsSum = 0;
    let sum = max * (max + 1) / 2;
    
    for (let x = 0; x < max; x += 1) {
        numsSum += nums[x]
    }
    return sum - numsSum;
};