const capitalize = require('./capitalise-string');
test('capitalize string', () => {
  expect(capitalize('initilize')).toBe('Initilize');
});
