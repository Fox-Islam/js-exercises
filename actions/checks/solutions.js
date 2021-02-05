const chai = require('chai'),
expect = chai.expect,
{ 
    sayHello,
    multiply,
    calculateSum,
    getFullName,
    insertString,
    getWordsWhichContain,
    reverseAWord,
    reverseEveryWord,
} = require('../../exercises');

describe('When calling the sayHello function', function () {
    it('Should return "Your Result"', function () {
        expect(sayHello("Alice")).to.eql("Your Result");
    });
});

describe('When multiplying two numbers together using the multiply function', function () {
    it('Should return "Your Result"', function () {
        expect(multiply(5, 10)).to.eql("Your Result");
    });
});

describe('When calculating a sum using the calculateSum function', function () {
    it('Should return "Your Result"', function () {
        expect(calculateSum([5, 10])).to.eql("Your Result");
    });
});

describe('When getting properties from an object using the getFullName function', function () {
    it('Should return "Your Result"', function () {
        expect(getFullName({
            firstName: "Alice",
            lastName: "InterestingLastName"
        })).to.eql("Your Result");
    });
});

describe('When altering a string using the insertString function', function () {
    it('Should return "Your Result"', function () {
        expect(insertString("This is a sentence", " k ")).to.eql("Your Result");
    });
});

describe('When filtering an array using the getWordsWhichContain function', function () {
    it('Should return "Your Result"', function () {
        const words = ["This", "is", "a", "list", "of", "words"];
        expect(getWordsWhichContain(words, "i")).to.eql("Your Result");
    });
});

describe('When altering a string using the reverseAWord function', function () {
    it('Should return "Your Result"', function () {
        expect(reverseAWord("hello")).to.eql("Your Result");
    });
});

describe('When altering an array of strings using the reverseEveryWord function', function () {
    it('Should return "Your Result"', function () {
        expect(reverseEveryWord(["hello"])).to.eql("Your Result");
    });
});