// https://leetcode.com/problems/jewels-and-stones/
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let f = S.match(new RegExp(`[${J}]`, 'g')) || []
  return f.length;
};