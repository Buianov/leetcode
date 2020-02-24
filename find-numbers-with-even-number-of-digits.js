// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/submissions/
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = n => n.map(e => e.toString().split('').length).filter(e => !(e % 2)).length;