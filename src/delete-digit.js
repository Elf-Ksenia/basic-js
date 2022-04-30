const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let digits = str.split('');
  let max = 0;
  let newArr = [];
  digits.reduce((total, amount, index, aray) => {
    total += amount;
    if (index < digits.length - 1) {
      newArr.push(total);
    }
  })
  return newArr;
}

module.exports = {
  deleteDigit
};

console.log(deleteDigit(152))