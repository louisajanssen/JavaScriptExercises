function removeDuplicates(array) {
    var newArr = [];

    for (var i = 0; i < array.length; i++) {
        if (newArr.indexOf(array[i]) === - 1)
        newArr.push(array[i])
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

assertEqual(removeDuplicates([0, 0, 1, 2, 3, 3, 4, 5]), [0, 1, 2, 3, 4, 5], 'simple array')
assertEqual(removeDuplicates([1, 1, 2, 2, 3, 3, 5, 5, 8, 8]), [1, 2, 3, 5, 8], 'longer array')