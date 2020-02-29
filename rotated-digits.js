/**
 * @param {number} N
 * @return {number}
 */

// https://leetcode.com/problems/rotated-digits/

const rotate = num => {
  switch (num) {
    case '2':
      return '5';
    case '5':
      return '2';
    case '6':
      return '9';
    case '9':
      return '6';
    default:
      return num;
  }
};

const check = num => {
  if (/[347]/.test(num)) return false;
  let rev = num.toString().split('').map(e => rotate(e)).join('');
  if (parseInt(rev, 10) !== num) return true;
  return false;
};

const rotatedDigits = N => {
  let counter = 0;
  for (let x = 1; x <= N; x += 1) {
    if (check(x)) counter++;
  }
  return counter;
};