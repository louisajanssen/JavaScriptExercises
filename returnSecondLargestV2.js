function returnSecondLargest(array) {
    if (Array.isArray(array) === false) {
        return -1
    }
    if (array.length === 1 || array.length === 0) {
        return -1
    }

    var largest = array[0];
    var secondLargest = array[0];
    for (var i = 0; i < array.length; i++) {
        if(array[i] > largest) {
            largest = array[i]
         } 
        if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i]
        }
    }
    
    return secondLargest;
}

function areArraysEqual(actual, expected) {
    if (expected.length !== actual.length) {
        return false
    } else {
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                return false;
            }
        }
    }
    return true;
}

function assertEqual(actual, expected, testName) {
    if (areArraysEqual(actual, expected)) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
}

assertEqual(returnSecondLargest([1, 2, 3]), 2, 'normal array')
assertEqual(returnSecondLargest([6, 5, 3, 7]), 6, 'unordered array')
assertEqual(returnSecondLargest([4, 3, 2, 1]), 3, 'big to small array')
assertEqual(returnSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2, 'long array')
assertEqual(returnSecondLargest([1]), -1, 'one number in array')
assertEqual(returnSecondLargest([]), -1, 'empty array')
assertEqual(returnSecondLargest(1, 2, 3), -1, 'numbers')
assertEqual(returnSecondLargest('1, 2, 3'), -1, 'string')
assertEqual(returnSecondLargest(true), -1, 'booelan')
