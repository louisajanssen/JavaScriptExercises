function shiftToLeft(array, num) {
    var newArr = [];

    for (var i = 0 + num; i < array.length; i++) {
        newArr.push(array[i]);
    }

    for (var i = 0; i < 0 + num; i++) {
        newArr.push(array[i]);
    }
    return newArr;
}

function areArraysEqual(actual, expected) {
    if (actual.length !== expected.length) {
        return false;
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

assertEqual(shiftToLeft([1, 2, 3], 1), [2, 3, 1], 'simple array');
assertEqual(shiftToLeft([1, 2, 3, 4, 5, 6, 7, 8], 2), [3, 4, 5, 6, 7, 8, 1, 2], 'long array');
assertEqual(shiftToLeft([1, 2, 3, 4, 5, 6, 7, 8], 5), [6, 7, 8, 1, 2, 3, 4, 5], 'large num');
assertEqual(shiftToLeft([1, 2], 1), [2, 1], 'short array');

