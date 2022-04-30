const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let month = date.getMonth();
  let season = ['winter', 'spring', 'summer', 'autumn (fall)'];
  if (typeof month == 'number', month <= 13) {
    if (month == 1 && month == 2 && month == 12) {
      return season = season[0];
    }
    else if (3 <= month && month <= 5) {
      return season = season[1];
    }
    else if (6 <= month && month <= 8) {
      return season = season[2];
    }
    else if (9 <= month && month <= 11) {
      return season = season[3];
    }
  }
  else {
    return error = 'Unable to determine the time of year!';
  }
}

module.exports = {
  getSeason
};

console.log(getSeason(new Date(2020, 1, 31)))