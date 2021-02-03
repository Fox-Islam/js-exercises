
const chai = require('chai'),
    expect = chai.expect,
    { sayHello, multiply, calculateSum, getFullName } = require('../exercises');

describe('When calling the sayHello function', function () {
    it('Should be able to say hello to Alice', function () {
        expect(sayHello("Alice")).to.eql("Hello, Alice");
    });
    it('Should be able to say hello to Bob', function () {
        expect(sayHello("Bob")).to.eql("Hello, Bob");
    });
});

describe('When multiplying two numbers together using the multiply function', function () {
    it('Should be able to multiply two positive numbers', function () {
        expect(multiply(5, 10)).to.eql(50);
    });
    it('Should be able to multiply with 0', function () {
        expect(multiply(5, 0)).to.eql(0);
    });
    it('Should be able to multiply with a negative number', function () {
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

describe('When getting properties from an object using the getFullName function', function () {
    it('Should be able to return a full name', function () {
        expect(getFullName({
            firstName: "Alice",
            lastName: "InterestingLastName"
        })).to.eql("Alice InterestingLastName");
    });
});