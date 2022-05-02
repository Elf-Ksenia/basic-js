const { NotImplementedError } = require('../extensions/index.js');

/*
 * Create name of dream team based on the names of its members

  @param {Array} members names of the members 
  @return {String | Boolean} name of the team or false
  in case of incorrect members
 
  @example
   */
/* createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
*/

function createDreamTeam(members) {
  let letter;
  let teamName = [];
  members.forEach(function (member, i) {
    if (typeof member === 'string') {
      letter = member[0].toUpperCase();
      teamName.push(letter);
    }
  })
  return teamName.join('');
}

module.exports = {
  createDreamTeam
};
