function moreThanFive(string) {


    var count = 0;
    var split = string.split(' ');
    for (var i = 0; i < split.length; i++) {
        if (split[i].length > 5) {
            count++
        }
    }
    return count;
}

var output = moreThanFive('Miko is the biggest boy')
console.log(output)
var output1 = moreThanFive('Louisa is younger than Jorge')
console.log(output1)


// 'Miko is the biggest boy' -> 1
// 'Louisa is younger than Jorge' -> 2