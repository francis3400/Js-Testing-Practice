const counter = require('./stringlength');
test('length is within bound', () => {
  expect(counter('Hello')).toBe(5);
});
it('The string is out of bound', () => {
  expect(counter('Hello World People')).toThrow();
});
