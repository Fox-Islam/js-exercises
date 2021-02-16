# js-exercises
Simple exercises to get a handle on JavaScript

## Getting started
### CodeSandbox
The quickest way to get started is to [click this link to the CodeSandbox page for this repo](https://codesandbox.io/s/js-exercises-lqsd1?file=/exercises.js), double-click the 'Console' (There should be a tab at the bottom of the panel on the right-hand side) to open it up. You should see a list of failing tests in your console (Somewhere along the lines of `❌ Successn't... Expected 'Your Result' to equal`)

Whenever you make a change to a file, CodeSandbox will automatically re-run the answer checker and the console output will be refreshed.

### Running the exercises locally
To run the exercises on your computer clone this repository using git/GitHub Desktop/github-cli or download it as a .zip folder and extract the contents manually, then (from the project directory) run
```
npm install
```
followed by
```
npm run check-answers
```
You should see a list of failing tests in your console (Somewhere along the lines of `❌ Successn't... Expected 'Your Result' to equal`)

Whenever you want to re-run the tests, run `npm run check-answers`

If you want to run a test for a single function run `npm run check-answers <function name>` (for example `npm run check-answers sayHello`)

## Now what?
To start making those tests pass, open up the 'exercises.js' file (It should already be opened in the CodeSandbox link) where you'll see a bunch of functions `return`ing `"Your Result"` for you to modify.

Feel free to create additional functions in the file to use within the pre-defined exercise functions but changing the exercise function names or the number of inputs they take in is likely to cause the tests to fail.

## Example
As an example to get you going, in exercises.js we have a `sayHello(name)` function, when we run the tests initially it says the tests for that function fail because
```
1) When calling the sayHello function
      - Should be able to say hello to Alice:
      ❌ Successn't... Expected "Your Result" to equal "Hello, Alice"

      Should be able to say hello to Bob:
      ❌ Successn't... Expected "Your Result" to equal "Hello, Bob"
```
To get these tests to pass we need to modify the `sayHello` function to be
```javascript
function sayHello(name) {
   return 'Hello, ' + name;
}
```
If you check your answers now you should be able to see that those two tests pass
