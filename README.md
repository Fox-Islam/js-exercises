# js-exercises
Simple exercises to get a handle on JavaScript

To get started either clone this repository using git/GitHub Desktop/github-cli or download it as a .zip folder and extract the contents manually.

From the project directory run
```
npm install
```
followed by
```
npm run check-answers
```

You should see a list of failing tests (Somewhere along the lines of `❌ Successn't... Expected 'Your Result' to equal`)

To start making those tests pass, open up the 'exercises.js' file where you'll see a bunch of empty functions waiting to be filled in.

Feel free to create additional functions in the file to use within the pre-defined exercise functions but changing the exercise function names or the number of inputs they take in is likely to cause the tests to fail.

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
