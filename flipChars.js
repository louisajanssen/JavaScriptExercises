function flipChars (array) {
    // if (array.length < 3) {
    //     return [];
    // }

    
    for (var i = 0; i + 2 < array.length; i += 3) {
        var hold = array[i]
        array[i] = array[i + 2]
        var hold2 = array[i + 1]
        array[i + 1] = hold
        array[i + 2] = hold2
    }
    return array;
}

function areArraysEqual (actual, expected) {
    if (actual.length !== expected.length) {
        return false
    } else {
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i])
            return false;
        }
    }
    return true;
}

function assertEqual (actual, expected, testName) {
    if (areArraysEqual(actual, expected)) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
}

assertEqual(flipChars([1, 2, 3, 4, 5, 6, 7, 8, 9]), [3, 1, 2, 6, 4, 5, 9, 7, 8], 'normal array')
assertEqual(flipChars([1, 2]), [1, 2], 'array with two nums')
assertEqual(flipChars([1, 2, 3, 4]), [3, 1, 2, 4], 'array with four nums')
