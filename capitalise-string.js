const capitalize = (string) => {
  console.log(string.slice(1));
  return string[0].toUpperCase() + string.slice(1);
};

module.exports = capitalize;
