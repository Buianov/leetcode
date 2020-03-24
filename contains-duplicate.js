/**
 * @param {number[]} nums
 * @return {boolean}
 */
// https://leetcode.com/problems/contains-duplicate/submissions/
var containsDuplicate = function(nums) {
    let s = [...new Set(nums)]; //лишнее действие, можно просто s.size
    if (s.length === nums.length) {
        return false
    }
    return true
};