const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members === null || members === undefined) return false;
  if (members.constructor !== Array) return false;

  let nameLetters = [];
  members.forEach(function (element) {
    if (typeof element === "string") {
      nameLetters.push(element.trim()[0].toUpperCase());
    }
  });

  if (nameLetters.length > 0) {
    let name = nameLetters.sort().join("");
    return name;
  } else return false;
}

module.exports = {
  createDreamTeam,
};
