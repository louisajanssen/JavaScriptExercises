//Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.
function findPairForSum(array, n) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === n) {
                result.push(array[i], array[j]);
            }
        }
    }
    return result;
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

//Example:

assertEqual(findPairForSum([3, 34, 4, 12, 5, 2], 9), [4, 5], 'returns array with nums that add to targetSum')
