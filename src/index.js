module.exports = function check(str, bracketsConfig) {
  const brackets = {};
  const special = new Set();

  bracketsConfig.forEach(([key, value]) => {
    brackets[value] = key;
    if (key === value) {
      special.add(key);
    }
  });

  const stack = [];

  const isBalanced = str.split('').every((x) => {
    if (special.has(x)) {
      if (stack[stack.length - 1] === x) {
        stack.pop();
      } else {
        stack.push(x);
      }
    } else if (Object.values(brackets).includes(x)) {
      stack.push(x);
    } else if (brackets[x]) {
      if (stack.pop() !== brackets[x]) return false;
    }
    return true;
  });

  return isBalanced && stack.length === 0;
};
