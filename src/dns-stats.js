const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
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

function getDNSStats(domains) {
  let arrTmp = new Array();
  let domainsArray = new Array();
  let resultObj = new Object();

  for (let i = 0; i < domains.length; i++)
    arrTmp.push(domains[i].split(".").reverse());

  for (let i = 0; i < arrTmp.length; i++) {
    let str = "";
    for (let a = 0; a < arrTmp[i].length; a++) {
      str += "." + arrTmp[i][a];
      domainsArray.push(str);
    }
  }

  domainsArray.forEach((item) => {
    resultObj[item] = (resultObj[item] || 0) + 1;
  });

  return resultObj;
}

module.exports = {
  getDNSStats,
};
