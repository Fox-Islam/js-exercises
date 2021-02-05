
const chai = require('chai'),
    expect = chai.expect,
    {
        sayHello,
        multiply,
        calculateSum,
        getFullName,
        insertString,
        autoContract,
        getWordsWhichContain,
        reverseAWord,
        reverseEveryWord,
    } = require('../exercises');

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

describe('When altering a string using the insertString function', function () {
    it('Should be able to insert a letter between each word', function () {
        expect(insertString("This is a sentence", " k ")).to.eql("This k is k a k sentence");
    });

    it('Should be able to insert a word between each word', function () {
        expect(insertString("This is a sentence", " word ")).to.eql("This word is word a word sentence");
    });

    it('Should be able to insert a smiley face between each word', function () {
        expect(insertString("This is a sentence", " :) ")).to.eql("This :) is :) a :) sentence");
    });
});

describe('When altering a string using the autoContract function', function () {
    it('Should be able to contract "it is"', function () {
        expect(autoContract("it is")).to.eql("it's");
    });

    it('Should be able to contract "we have"', function () {
        expect(autoContract("we have")).to.eql("we've");
    });

    it('Should be able to contract "he had"', function () {
        expect(autoContract("he had")).to.eql("he'd");
    });

    it('Should be able to contract "they would"', function () {
        expect(autoContract("they would")).to.eql("they'd");
    });

    it('Should be able to contract "she will"', function () {
        expect(autoContract("she will")).to.eql("she'll");
    });

    it('Should be able to contract "we are"', function () {
        expect(autoContract("we are")).to.eql("we're");
    });

    it('Should be able to contract "could not"', function () {
        expect(autoContract("could not")).to.eql("couldn't");
    });

    it('Should be able to contract "you all"', function () {
        expect(autoContract("you all")).to.eql("y'all");
    });

    it('Should be able to contract "you all would not have had"', function () {
        expect(autoContract("you all would not have had")).to.eql("y'all'dn't've'd");
    });

    it('Should be able to contract "would not have had you all?"', function () {
        expect(autoContract("would you all not have had?")).to.eql("would y'alln't've'd?");
    });
});


describe('When filtering an array using the getWordsWhichContain function', function () {
    it('Should be able to filter down to items containing a character', function () {
        const words = ["This", "is", "a", "list", "of", "words"];
        const result = getWordsWhichContain(words, "i");
        expect(result).to.be.an('array');
        expect(result).to.contain("This");
        expect(result).to.contain("is");
        expect(result).to.not.contain("a");
        expect(result).to.contain("list");
        expect(result).to.not.contain("of");
        expect(result).to.not.contain("words");
    });

    it('Should be able to filter down to items containing a word', function () {
        const words = ["This is a list of words", "This is", "is a", "a list", "of words"];
        const result = getWordsWhichContain(words, "This");
        expect(result).to.be.an('array');
        expect(result).to.contain("This is a list of words");
        expect(result).to.contain("This is");
        expect(result).to.not.contain("is a");
        expect(result).to.not.contain("a list");
        expect(result).to.not.contain("of words");
    });
});

describe('When altering a string using the reverseAWord function', function () {
    it('Should be able to reverse a word containing only lowercase letters', function () {
        expect(reverseAWord("hello")).to.eql("olleh");
    });

    it('Should be able to reverse a word containing a mix of lowercase and uppercase letters', function () {
        expect(reverseAWord("HellO")).to.eql("OlleH");
    });
});

describe('When altering an array of strings using the reverseEveryWord function', function () {
    it('Should be able to reverse one word', function () {
        expect(reverseEveryWord(["hello"])).to.eql(["olleh"]);
    });

    it('Should be able to reverse four words', function () {
        expect(reverseEveryWord(["hello", "HELLO", "Hello", "HellO"])).to.eql(["olleh", "OLLEH", "olleH", "OlleH"]);
    });
});
