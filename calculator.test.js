const Calculator = require('./calculator.js');
const assert = require('assert');
describe('CalculatorunitTests', () => {
  it('add_two_numbers', () => {
    assert(Calculator.add(2, 10) === 12);
  });
  it('subtract_two_numbers', () =>{
    assert(Calculator.subtract(10, 2) === 8)
  })
  it('divide_two_numbers', () =>{
    assert(Calculator.divide(20, 4) === 5)
  })
  it('multiply_two_numbers', () =>{
    assert(Calculator.multiply(10, 4) === 40)
  })
});
