const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * 
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
/*
const domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
]
function getDNSStats(domains) {
  
  const domainsObj = { ...domains };
  return domainsObj;
};

module.exports = {
  getDNSStats
};

console.log(getDNSStats(domains))
*/