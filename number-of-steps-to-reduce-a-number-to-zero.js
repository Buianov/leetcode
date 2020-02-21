/**
 * @param {number} num
 * @return {number}
 */

// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

const numberOfSteps  = function(num) {
    let counter = 0;
    for (; num !== 0; counter += 1) {
        num = num % 2 ? num - 1 : num / 2;
    }
    return counter;
};
