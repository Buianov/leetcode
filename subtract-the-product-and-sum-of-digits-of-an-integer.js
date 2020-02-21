// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/submissions/
/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  const a = n.toString().split('').map(e => parseInt(e, 10));
  const p = a.reduce((a, b) => a * b);
  const s = a.reduce((a, b) => a + b);
  return p - s;
};