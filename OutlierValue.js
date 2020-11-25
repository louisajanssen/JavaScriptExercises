function detectOutlierValue(string) {
    var split = string.split(' ');
    var odds = [];
    var evens = [];
  
    for (var i = 0; i < split.length; i++) {
      var currentNum = Number(split[i])
      if (currentNum % 2 === 0) {
          evens.push({
            value: currentNum,
            index: i + 1
          })
      } else {
          odds.push({
            value: currentNum,
            index: i + 1
          })
      }
    }
    if (evens.length === 1) {
      return evens[0].index;
    } else {
      return odds[0].index;
    }
   
  }
  
  function assertEqual (actual, expected, testName) {
    if (actual === expected) {
      console.log('passed')
    } else {
      console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
  }
  
  // Examples :
  assertEqual(detectOutlierValue("2 4 7 8 10"), 3, 'returns index of sole even')
  assertEqual(detectOutlierValue("1 10 1 1"), 2, 'returns index of sole odd')