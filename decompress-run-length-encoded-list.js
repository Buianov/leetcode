// https://leetcode.com/problems/decompress-run-length-encoded-list/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var decompressRLElist = function(nums) {
  let arr = [];
  for (let x = 0; x < nums.length; x += 2) {
      const len = nums[x];
      const value = nums[x+1];

      arr = [...arr, ...new Array(len).fill(value)]
  }
  return arr;
};