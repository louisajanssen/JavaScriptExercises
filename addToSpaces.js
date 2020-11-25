function addToSpaces(string) {
    if (typeof string !== 'string') {
        return '';
    }

    var split = string.split(' ');
    var result = '';

    for (var i = 0; i < split.length; i++) {
        result += split[i]
        if (i !== split.length - 1) {
            result += '%20'
        }
    }
    return result;
}

function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed ' + testName)
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
}

assertEqual(addToSpaces('Miko good boy'), 'Miko%20good%20boy', 'simple string')
assertEqual(addToSpaces('Miko'), 'Miko', 'one word')
assertEqual(addToSpaces('Miko good is a good boy that is fluffy'), 'Miko%20good%20is%20a%20good%20boy%20that%20is%20fluffy', 'long string')
assertEqual(addToSpaces(''), '', 'empty string')
assertEqual(addToSpaces([1, 2, 3]), '', 'array')
assertEqual(addToSpaces(1, 2, 3), '', 'number')