const {
    sayHello,
    multiply,
    calculateSum,
    getFullName,
    insertString,
    autoContract,
    getWordsWhichContain,
    reverseAWord,
    reverseEveryWord
} = require("../exercises");

const {
    initialise,
    describe,
    it,
    outputTestResult,
    summarise
} = require('./basic-test-framework')

initialise();

describe("When calling the sayHello function", function () {
    it("Should be able to say hello to Alice", function () {
        let actual = sayHello("Alice");
        let expected = "Hello, Alice";
        outputTestResult(actual, expected);
    });
    it("Should be able to say hello to Bob", function () {
        let actual = sayHello("Bob");
        let expected = "Hello, Bob";
        outputTestResult(actual, expected);
    });
});

describe("When multiplying two numbers together using the multiply function", function () {
    it("Should be able to multiply two positive numbers", function () {
        let actual = multiply(5, 10);
        let expected = 50;
        outputTestResult(actual, expected);
    });
    it("Should be able to multiply with 0", function () {
        let actual = multiply(5, 0);
        let expected = 0;
        outputTestResult(actual, expected);
    });
    it("Should be able to multiply with a negative number", function () {
        let actual = multiply(-2, 5);
        let expected = -10;
        outputTestResult(actual, expected);
    });
});

describe("When getting properties from an object using the getFullName function", function () {
    it("Should be able to return a full name", function () {
        let actual = getFullName({
            firstName: "Alice",
            lastName: "InterestingLastName"
        });
        let expected = "Alice InterestingLastName";
        outputTestResult(actual, expected);
    });
});

describe("When calculating a sum using the calculateSum function", function () {
    it("Should be able to calculate the sum of an array containing two values", function () {
        let actual = calculateSum([5, 10]);
        let expected = 15;
        outputTestResult(actual, expected);
    });
    it("Should be able to calculate the sum of an array containing three values", function () {
        let actual = calculateSum([5, 10, 15]);
        let expected = 30;
        outputTestResult(actual, expected);
    });
    it("Should correctly output 0 when calculating the sum of an array containing no values", function () {
        let actual = calculateSum();
        let expected = 0;
        outputTestResult(actual, expected);
    });
});

describe("When altering a string using the insertString function", function () {
    it("Should be able to insert a letter between each word", function () {
        let actual = insertString("This is a sentence", " k ");
        let expected = "This k is k a k sentence";
        outputTestResult(actual, expected);
    });

    it("Should be able to insert a word between each word", function () {
        let actual = insertString("This is a sentence", " word ");
        let expected = "This word is word a word sentence";
        outputTestResult(actual, expected);
    });

    it("Should be able to insert a smiley face between each word", function () {
        let actual = insertString("This is a sentence", " :) ");
        let expected = "This :) is :) a :) sentence";
        outputTestResult(actual, expected);
    });
});

describe("When altering a string using the autoContract function", function () {
    it('Should be able to contract "it is"', function () {
        let actual = autoContract("it is");
        let expected = "it's";
        outputTestResult(actual, expected);
    });

    it('Should be able to contract "we have"', function () {
        let actual = autoContract("we have");
        let expected = "we've";
        outputTestResult(actual, expected);
    });

    it('Should be able to contract "he had"', function () {
        let actual = autoContract("he had");
        let expected = "he'd";
        outputTestResult(actual, expected);
    });

    it('Should be able to contract "they would"', function () {
        let actual = autoContract("they would");
        let expected = "they'd";
        outputTestResult(actual, expected);
    });

    it('Should be able to contract "she will"', function () {
        let actual = autoContract("she will");
        let expected = "she'll";
        outputTestResult(actual, expected);
    });

    it('Should be able to contract "we are"', function () {
        let actual = autoContract("we are");
        let expected = "we're";
        outputTestResult(actual, expected);
    });

    it('Should be able to contract "could not"', function () {
        let actual = autoContract("could not");
        let expected = "couldn't";
        outputTestResult(actual, expected);
    });

    it('Should be able to contract "you all"', function () {
        let actual = autoContract("you all");
        let expected = "y'all";
        outputTestResult(actual, expected);
    });

    it('Should be able to contract "you all would not have had"', function () {
        let actual = autoContract("you all would not have had");
        let expected = "y'all'dn't've'd";
        outputTestResult(actual, expected);
    });

    it('Should be able to contract "would you all not have had?"', function () {
        let actual = autoContract("would you all not have had?");
        let expected = "would y'alln't've'd?";
        outputTestResult(actual, expected);
    });
});

describe("When filtering an array using the getWordsWhichContain function", function () {
    it("Should be able to filter down to items containing a character", function () {
        const words = ["This", "is", "a", "list", "of", "words"];
        const actual = getWordsWhichContain(words, "i");
        const expected = ["This", "is", "list"];
        outputTestResult(actual, expected);
    });

    it("Should be able to filter down to items containing a word", function () {
        const words = [
            "This is a list of words",
            "This is",
            "is a",
            "a list",
            "of words"
        ];
        const actual = getWordsWhichContain(words, "This");
        const expected = ["This is a list of words", "This is"];
        outputTestResult(actual, expected);
    });
});

describe("When altering a string using the reverseAWord function", function () {
    it("Should be able to reverse a word containing only lowercase letters", function () {
        let actual = reverseAWord("hello");
        let expected = "olleh";
        outputTestResult(actual, expected);
    });

    it("Should be able to reverse a word containing a mix of lowercase and uppercase letters", function () {
        let actual = reverseAWord("HellO");
        let expected = "OlleH";
        outputTestResult(actual, expected);
    });
});

describe("When altering an array of strings using the reverseEveryWord function", function () {
    it("Should be able to reverse one word", function () {
        let actual = reverseEveryWord(["hello"]);
        let expected = ["olleh"];
        outputTestResult(actual, expected);
    });

    it("Should be able to reverse four words", function () {
        let actual = reverseEveryWord(["hello", "HELLO", "Hello", "HellO"]);
        let expected = ["olleh", "OLLEH", "olleH", "OlleH"];
        outputTestResult(actual, expected);
    });
});

summarise();
