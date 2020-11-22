function blackJackV2 (array1, array2) {
    var player1 = turnsIntoNums(array1);
    var player2 = turnsIntoNums(array2);

    var player1Total = 0;
    var player2Total = 0;

    for (var i = 0; i < player1.length; i++) {
        player1Total += player1[i];
    }

    for (var j = 0; j < player2.length; j++) {
        player2Total += player2[j];
    }

    if (player1Total > 21 && player2Total > 21) {
        return 0;
    }

    if (player1Total > 21) {
        return - 1;
    }

    if (player2Total > 21) {
        return 1;
    }
    
    if (player1Total > player2Total) {
        return 1;
    }

    if (player2Total > player1Total) {
        return - 1;
    }

    if (player1Total === player2Total) {
        return 0;
    }
}

function turnsIntoNums (array) {
    var newArr= [];

    for (var i = 0; i < array.length ; i++) {
        if (array[i] === 'K' || array[i] === 'Q' || array[i] === 'J') {
            newArr.push(10)
        } else if (array[i] === 'A') {
            newArr.push(11)
        } else {
            newArr.push(parseInt(array[i]))
        }
    }
    return newArr;
}

function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
}

assertEqual(blackJackV2(['3', '5'], ['J', '9']), -1, 'player 2 wins');
assertEqual(blackJackV2(['10', '5', '5'], ['1', '9']), 1, 'player 1 wins');
assertEqual(blackJackV2(['5', '5', '5'], ['J', '5']), 0, 'tie');
assertEqual(blackJackV2(['A', 'A'], ['J', '9']), -1, 'player 2 wins');
assertEqual(blackJackV2(['A', 'A'], ['A', 'A']), 0, 'tie');