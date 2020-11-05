



var expected = { foo: 5, bar: 6 };

var actual = { foo: 6, bar: 6 }



function assertObjectsEqual(actual, expected, testName) {
    // your code here
    //concert object to string.
    var actualString = JSON.stringify(actual);
    var expectedString = JSON.stringify(expected);
    if (actualString != expectedString) {
        console.log(`FAILED [ ${testName} ] Expected ${expectedString}, but got ${actualString}`);
    } else {
        console.log("passed");
    }
}

assertObjectsEqual(actual, expected, 'detects that two objects are equal');
