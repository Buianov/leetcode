/**
 * @param {string} address
 * @return {string}
 */

// https://leetcode.com/problems/defanging-an-ip-address/submissions/

const defangIPaddr = adr => {
  return adr.replace(/\./g,'[.]');
};