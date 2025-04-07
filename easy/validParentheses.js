/**
 * @param {string}
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const strToArr = s.split('');

  strToArr.forEach((char) => {
    if (char === '(') stack.push(char);
    if (char === ')') {
      if (stack[stack.length - 1] === '(') stack.pop();
      else stack.push(-1);
    }

    if (char === '[') stack.push(char);
    if (char === ']') {
      if (stack[stack.length - 1] === '[') stack.pop();
      else stack.push(-1);
    }

    if (char === '{') stack.push(char);
    if (char === '}') {
      if (stack[stack.length - 1] === '{') stack.pop();
      else stack.push(-1);
    }
  });

  return stack.length === 0;
};
