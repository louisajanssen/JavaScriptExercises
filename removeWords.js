function removeWords(string) {
    if (typeof string !== 'string') {
        return '';
    }

    var split = string.split(' ');
    // if (split.length === 1 && (split[0] === 'the' || split[0] === 'she' || split[0] === 'he')) {
    //     return '';
    // }
    // console.log('split: ', split)
    var newArr = [];
    for (var i = 0; i < split.length; i++) {
        if (split[i] !== 'the' && split[i] !== 'she' && split[i] !== 'he') {
            newArr.push(split[i])
            //console.log('newArr:', newArr)
            //console.log('join ', join)

        }
    }
    return newArr.join(' ');
}

function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
}

assertEqual(removeWords('she is the best'), 'is best', 'simple string')
assertEqual(removeWords('best dog'), 'best dog', 'two words')
assertEqual(removeWords('she'), '', 'one word')
assertEqual(removeWords(''), '', 'empty string')
assertEqual(removeWords('she is the best at what she does with the work'), 'is best at what does with work', 'long string')
assertEqual(removeWords('best'), 'best', 'one word, not removed')
assertEqual(removeWords([1, 2, 3]), '', 'array')
assertEqual(removeWords(4, 5, 6), '', 'number')
assertEqual(removeWords(true), '', 'boolean')
assertEqual(removeWords({}), '', 'object')