/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/

const checkBalance = str => {
  let o = str.split('').reduce((acc, el) => {
    if (el === 'L') acc.L += 1;
    if (el === 'R') acc.R += 1;
    return acc;
  }, {L: 0, R: 0});
  return (o.R === o.L) ? true : false;
}

const balancedStringSplit = s => {
  let counter = 0;
  let window = 2;
  let str = '';

while (s.length) {
  str = s.slice(0, window);
  if (checkBalance(str)) {
    counter++;
    s = s.slice(window);
    window = 2;
    continue;
  } else {
    window += 2;
  }

}
  return counter;
};