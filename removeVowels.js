function removeVowels (string) {
    var split = string.split('');
    var vowel = 'AEIOUaeiou'
    var newArr = [];

    for (var i = 0; i < split.length; i++) {
        if (split[i] !== vowel) {
            newArr.push(split[i])
        }
    }
    return newArr.join('');
}

function assertEqual (actual, expected) {
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log('FAILED [' + '] expected ' + expected + ' but got ' + actual)
    }
}

assertEqual(removeVowels ('August 20'), 'Gst 20', 'normal string')