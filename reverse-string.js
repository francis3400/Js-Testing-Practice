const reverseString = (str) => {
  let reverse = '';
  const len = str.length;
  for (let i = len - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

module.exports = reverseString;
