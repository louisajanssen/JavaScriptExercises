function findSecondS(string, n){
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === n) {
            count ++;
        }
        if (count === 2) {
            return i;
        }
    }
}


var input = 'Mississippi'
var output = findSecondS(input, 's');
console.log(output);