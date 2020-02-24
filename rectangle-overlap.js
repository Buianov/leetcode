// https://leetcode.com/problems/rectangle-overlap/submissions/
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = (rec1, rec2) => {
     const xOverlap = !(rec1[0] >= rec2[2] || rec1[2] <= rec2[0]);
    const yOverlap = !(rec1[1] >= rec2[3] || rec1[3] <= rec2[1]);
    return xOverlap && yOverlap;
};