const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let yard = [].concat(...matrix);
  let cats = 0;
  yard.forEach(function (box, i) {
    if (box == '^^')
      cats++
  })
  return cats
}
module.exports = {
  countCats
};

