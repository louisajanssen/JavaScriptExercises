function reverseArray(array) {
    var oldLength = array.length;
    for (var i = array.length -1; i > - 1; i--) {
        array.push(array[i]);
    }
    array.splice(0, oldLength);
    return array;
}

function reverseArrayV2(array) {
    for (var i = 0; i < array.length / 2; i++) {
        var hold = array[i];
        array[i] = array[array.length - i - 1]
        array[array.length - i - 1] = hold
    }

    return array;
}

function areArraysEqual(actual, expected) {
    if (actual.length !== expected.length) {
        return false;
    } else {
        for (var i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                return false
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

assertEqual(reverseArrayV2([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1], 'reverses normal array')
assertEqual(reverseArrayV2([1]), [1], 'array with one number')
assertEqual(reverseArrayV2([]), [], 'empty array')
assertEqual(reverseArrayV2([1, 2]), [2, 1], 'array with two numbers')
assertEqual(reverseArrayV2([5, 3, 9, 10]),[10, 9, 3, 5], 'unsorted array')
