const colourFormat = process.stdout ? "%s" : "%c";
const greenText = process.stdout ? "\x1b[32m" : "color: #bada55";
const redText = process.stdout ? "\x1b[31m" : "color: #d81f1f";
const defaultText = process.stdout ? "\x1b[0m" : "color: #ffffff";
const successMessage = "\t " + colourFormat + "✔" + colourFormat + " Success!";
const failureMessage = "\t ❌ Successn't...";

let passingTests;
let failingTests;
let numberOfDescribes;

function initialise() {
    process.stdout ? console.log("\nStarting tests...\n") : console.clear();
    passingTests = 0;
    failingTests = 0;
    numberOfDescribes = 0;
}

function describe(message, callback) {
    numberOfDescribes++;
    console.log(numberOfDescribes + ') ' + message + ":");
    callback();
}

function it(message, callback) {
    console.log("\t- " + message + ":");
    callback();
    console.log();
}

function outputTestResult(actual, expected) {
    if (areEqual(actual, expected)) {
        passingTests++;
        console.log(createSuccessfulTestString(expected), greenText, defaultText);
        return;
    }
    failingTests++;
    console.log(createFailedTestString(actual, expected));
}

function areEqual(actual, expected) {
    if (actual === expected) {
        return true;
    }
    if ((actual == null || expected == null)) {
        return false;
    }
    if (typeof actual !== typeof expected) {
        return false;
    }
    if (actual.length !== expected.length) {
        return false;
    }
    if (typeof expected === 'string' || typeof expected === 'number') {
        return actual === expected;
    }
    const everyItemMatches = !actual.some(function (item, index) {
        return item !== expected[index];
    });
    return everyItemMatches;
}

function createSuccessfulTestString(expected) {
    const message = successMessage + " Answer: ";
    if (expected.constructor === Array) {
        const formattedArray = '["' + expected.join('", "') + '"]';
        return message + formattedArray;
    }
    return message + expected;
}

function createFailedTestString(actual, expected) {
    return `${failureMessage} Expected ${formatValue(actual)} to equal ${formatValue(expected)}`;
}

function formatValue(value) {
    if (value.constructor === Array) {
        return `["${value.join('", "')}"]`
    }
    if (typeof value === 'number') {
        return value;
    }
    return `"${value}"`;
}

function summarise() {
    console.log(`\n${colourFormat}${passingTests} passing tests${colourFormat}`, greenText, defaultText);
    console.log(`${colourFormat}${failingTests} failing tests${colourFormat}`, redText, defaultText);
}

module.exports = {
    initialise,
    describe,
    it,
    outputTestResult,
    summarise
}