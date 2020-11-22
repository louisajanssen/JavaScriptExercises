function withoutModulo(x, y) {
    while(x >= y) {
        x = x - y
    }
    return x;
}

function assertEqual (actual, expected, testName) {
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
}

assertEqual(withoutModulo(5, 3), 2, 'returns 2')
assertEqual(withoutModulo(11, 4), 3, 'returns 3')
assertEqual(withoutModulo(7, 2), 1, 'returns 1')

