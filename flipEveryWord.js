function flipEveryWord(string) {
    if (typeof string !== 'string') {
        return '';
    }
    var flipped = '';
    var words = string.split(' ');

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var reversed = reverseString(currentWord);
        flipped += reversed;

        if (i !== words.length -1) {
            flipped += ' ';
        }
    } 
    return flipped;
  }

  function reverseString(string) {
      var newString= '';

      for (var i = string.length - 1; i > -1; i--) {
          newString += string[i];
      }
      return newString;
  }
  
  function assertEqual(actual, expected, testName) {
      if (actual === expected) {
          console.log('passed ' + testName)
      } else {
          console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
      }
  }

  assertEqual(flipEveryWord('Miko is a good boy'), 'okiM si a doog yob', 'flips every word in string') 
  assertEqual(flipEveryWord('Miko'), 'okiM', 'single word') 
  assertEqual(flipEveryWord(''), '', 'empty string')
  assertEqual(flipEveryWord('M'), 'M', 'single letter')
  assertEqual(flipEveryWord('Waschmaschine'), 'enihcsamhcsaW', 'long word') 
  assertEqual(flipEveryWord([0, 1]), '', 'array with numbers') 
  assertEqual(flipEveryWord(0), '', 'number') 