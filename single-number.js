/**
 * @param {number[]} nums
 * @return {number}
 */
//https://leetcode.com/problems/single-number/submissions/

var singleNumber = function(nums) {
      let z = new Set();
      for (let x = 0; x < nums.length; x += 1) {
      let elem = nums[x];
      if (z.has(elem)) {
        z.delete(elem)
      } else {
        z.add(elem);
      }
    }
    return [...z][0];

};