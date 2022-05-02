const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  arr.forEach(function (item, i) {
    if (item == '--double-next') {
      return arr.splice(i, 1, i + 1);
    }
    else if (item == '--double-prev') {
      return arr.splice(i, 1, i);
    }
    else if (item == '--discard-prev') {
      return arr.splice(i - 1, 2);
    }
    else if (item == '--discard-next') {
      return arr.splice(i, 2);
    }
  })
  return arr;
}

module.exports = {
  transform
};

