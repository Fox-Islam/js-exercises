const chai = require('chai'),
    expect = chai.expect,
    exercises = require('../../exercises');

describe('When calling the exercise functions', function () {
    for (index in exercises) {
        it('Should return "Your Result" when calling the ' + exercises[index].name + ' function', function () {
            expect(exercises[index]()).to.eql("Your Result");
        })
    }
});
