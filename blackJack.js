function blackJack(player1Card1, player1Card2, player2Card1, player2Card2) {
    
}

function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
}

assertEqual(blackJack(5, 5, 6, 6), - 1, 'player 2 wins, 12 > 10')