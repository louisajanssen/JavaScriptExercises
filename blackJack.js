function blackJack(player1Card1, player1Card2, player2Card1, player2Card2) {
    var player1C1 = turnsIntoNums(player1Card1);
    var player1C2 = turnsIntoNums(player1Card2);
    var player2C1 = turnsIntoNums(player2Card1);
    var player2C2 = turnsIntoNums(player2Card2);

    // create var for player1 total
    var player1Total = player1C1 + player1C2;
    // create var for player2 total
    var player2Total = player2C1 + player2C2;
    // if player1 total is more than player 2 total
    if (player1Total > player2Total) {
        // player1 wins
        return 1;
    }
    // if player2 total is more than player1 total
    if (player2Total > player1Total) {
        // player2 wins
        return -1;
    }
    // if player1 total is same as player2 total
    if (player1Total === player2Total) {
        // tie
        return 0;
    }
    
}

function turnsIntoNums(string) {
    if(string === 'A') {
        return 11;
    } else if (string === "K" || string === 'Q' || string === 'J') {
        return 10;
    } else {
        return parseInt(string)
    }
}

function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log('FAILED [' + testName + '] expected ' + expected + ' but got ' + actual)
    }
}

assertEqual(blackJack(5, 5, 6, 6), - 1, 'player 2 wins, 12 > 10')
assertEqual(blackJack(7, 7, 2, 2), 1, 'player 1 wins, 14 > 4')
assertEqual(blackJack('A', 'J', 6, 6), 1, 'player 1 wins, 21 > 18')
assertEqual(blackJack('Q', 'J', 'A', 'K'), -1, 'player 2 wins, 21 > 20')