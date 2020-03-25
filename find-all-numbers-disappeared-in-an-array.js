// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/submissions/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set();
    for (let x = 1; x <= nums.length; x += 1) {
      set.add(x);
    }

    for (let x = 0; x < nums.length; x += 1) {
      set.delete(nums[x]);
    }
    return Array.from(set);
};

// ^^^ 132 ms / 52.5 MB

var findDisappearedNumbers = function(nums) {
    let ret = [];
    let arr = Array(nums.length + 1).fill(1);

    for (let x = 0; x < nums.length; x += 1) {
      arr[nums[x]] = null;
    }

    for (let x = 1; x < arr.length; x += 1) {
      if (arr[x]) ret.push(x);
    }
    
    return ret;
};

// ^^^ 100 ms / 45.2 MB