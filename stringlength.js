const counter = (str) => {
  let len = str.length;
  if (len >= 1 && len <= 10) {
    return len;
  } else {
    throw 'Out of counter bound';
  }
};

module.exports = counter;
