/**
 * @description Returns a greeting to the name provided as the input of the form "Hello, {name}"
 * @param {string} name
 * @returns {string}
 */
function sayHello(name) {
   return 'Your Result';
}

/**
 * @description Multiplies the two input numbers together and returns the value
 * @param {number} first
 * @param {number} second
 * @returns {number}
 */
function multiply(first, second) {
   return 'Your Result';
}

/**
 * @description Takes an input object which looks like
 * {
 *    "firstName": "Aaa",
 *    "lastName": "Bbb"
 * }
 * and returns the full name in the form "Aaa Bbb"
 * @param {Object} person
 * @returns {string}
 */
function getFullName(person) {
   return 'Your Result';
}

/**
 * @description Adds an array of numbers together and returns the total
 * @param {number[]} numbers
 * @returns {number}
 */
function calculateSum(numbers) {
   return 'Your Result';
}

/**
 * @description Insert a given string between every word in a sentence
 * @param {string} sentence
 * @param {string} insertString
 * @returns {string}
 */
function insertString(sentence, insertString) {
   return 'Your Result';
}

/**
 * @description Replaces parts of a sentence with some common contractions
 * [word -> replaced with (example)]
 * is -> 's (it is -> it's)
 * am -> 'm (I am -> I'm)
 * have -> 've (I have -> I've)
 * had -> 'd (he had -> he'd)
 * would -> 'd (they would -> they'd)
 * will -> 'll (she will -> she'll)
 * are -> 're (we are -> we're)
 * not -> n't (could not -> couldn't)
 * you -> y' (you all -> y'all)
 * @param {string} sentence
 * @returns {string}
 */
function autoContract(sentence) {
   return 'Your Result';
}

/**
 * @description Filters an array down to only the items that contain a given search string
 * @param {string[]} haystacks
 * @param {string} needle
 * @returns {string[]}
 */
function getWordsWhichContain(haystacks, needle) {
   return 'Your Result';
}

/**
 * @description Reverses the letters in a word
 * @param {string} word
 * @returns {string}
 */
function reverseAWord(word) {
   return 'Your Result';
}

/**
 * @description Reverses the letters in every word of a given array
 * @param {string[]} words
 * @returns {string[]}
 */
function reverseEveryWord(words) {
   return 'Your Result';
}

module.exports = {
   sayHello,
   multiply,
   calculateSum,
   getFullName,
   insertString,
   autoContract,
   getWordsWhichContain,
   reverseAWord,
   reverseEveryWord,
};
