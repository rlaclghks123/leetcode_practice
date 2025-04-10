/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  const makeLowerCase = s.toLowerCase();
  const onlyEngStr = makeLowerCase.replace(/[^a-z0-9]/g, '');
  const reversedOnlyEngStr = onlyEngStr.split('').reverse().join('');

  return onlyEngStr === reversedOnlyEngStr;
};
