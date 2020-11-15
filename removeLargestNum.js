function removeLargestNum(array){

    if (Array.isArray(array) === false) {
        return [-1];
    }

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            return [-1];
        }
    }

    var largest = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }
    }
    
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== largest) {
            newArray.push(array[i]);
        }
    }

    return newArray;
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

function assertEqual (actual, expected, testName) {
    if (areArraysEqual(actual, expected)) {
        console.log('passed ' + testName)
    } else {
        console.log('FAILED ' + testName + ' expected [' + expected + '] but got ' + actual)
    }
}

assertEqual(removeLargestNum([1, 2, 3, 4, 5]), [1, 2, 3, 4], 'removes largest number')

assertEqual(removeLargestNum([]), [], 'returns empty array')

assertEqual(removeLargestNum([1, 2, 3, 4, 5, 5]), [1, 2, 3, 4], 'removes both largest number')

assertEqual(removeLargestNum([1, 2, true, 4, 5]), [-1], 'returns [-1]')

assertEqual(removeLargestNum([-1, 2, 3, 4, 5]), [-1, 2, 3, 4], 'removes largest number, ignores minus')

assertEqual(removeLargestNum([0]), [], 'removes largest number 0')

assertEqual(removeLargestNum([1, 2, 'Miko', 4, 5]), [-1], 'returns [-1],')

assertEqual(removeLargestNum(['Miko is a good boy']), [-1], 'returns [-1]')

assertEqual(removeLargestNum(5), [-1], 'returns [-1]')

assertEqual(removeLargestNum([5, 1, 2, 3, 4, 5]), [1, 2, 3, 4], 'removes both largest number')

assertEqual(removeLargestNum([5, 5, 5, 5, 5]), [], 'removes all largest number')
