
const chai = require('chai'),
    expect = chai.expect,
    { sayHello, multiply, calculateSum } = require('../exercises');

describe('When calling the sayHello function', function () {
    it('Should return "Hello, Alice" when given "Alice" as an input name', function () {
        expect(sayHello("Alice")).to.eql("Hello, Alice");
    });
    it('Should return "Hello, Bob" when given "Bob" as an input name', function () {
        expect(sayHello("Bob")).to.eql("Hello, Bob");
    });
});

describe('When multiplying two numbers together using the multiply function', function () {
    it('Should return 50 when given 5 and 10 as inputs', function () {
        expect(multiply(5, 10)).to.eql(50);
    });
    it('Should return 0 when given 5 and 0 as inputs', function () {
        expect(multiply(5, 0)).to.eql(0);
    });
    it('Should return -10 when given -2 and 5 as inputs', function () {
        expect(multiply(-2, 5)).to.eql(-10);
    });
});

describe('When calculating a sum using the calculateSum function', function () {
    it('Should be able to calculate the sum of an array containing two values', function () {
        expect(calculateSum([5, 10])).to.eql(15);
    });
    it('Should be able to calculate the sum of an array containing three values', function () {
        expect(calculateSum([5, 10, 15])).to.eql(30);
    });
    it('Should correctly output 0 when calculating the sum of an array containing no values', function () {
        expect(calculateSum()).to.eql(0);
    });
});