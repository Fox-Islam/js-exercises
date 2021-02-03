# js-exercises
Simple exercises to get a handle on JavaScript

To get started run
```
npm install
```
followed by
```
npm test
```

You should see a list of failing tests (Somewhere along the lines of `AssertionError: expected 'Your Result' to deeply equal...`)

To start making those tests pass, open up the 'exercises.js' file where you'll see a bunch of empty functions waiting to be filled in. 

Feel free to create additional functions in the file to use within the pre-defined exercise functions but please don't change the exercise function names or the number of inputs they take in

As an example to get you going, in exercises.js we have a `sayHello(name)` function, when we run the tests initially it says we fail because
```
When calling the sayHello function
1) Should return "Hello, Alice" when given "Alice" as an input name
2) Should return "Hello, Bob" when given "Bob" as an input name
```
To get these tests to pass we need to modify the `sayHello` function to be
```javascript
function sayHello(name) {
   return 'Hello, ' + name;
}
```
If you run the tests now you should be able to see that those two tests now pass
