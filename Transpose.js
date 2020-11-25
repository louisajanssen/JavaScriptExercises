// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.
function transposeTwoStrings(array) {
    var string1 = array[0];
    var string2 = array[1];
    var result = '';

    for (var i = 0; i < string1.length; i++) {
        result += string1[i] + ' ' + string2[i]

        if (i !== string1.length - 1 && i !== string2.length -1) {
            result += '\n'
        }
    }


    return result;
}


var output = transposeTwoStrings(['Hello','World']);
console.log(output);

// should return:
// H W  
// e o  
// l r  
// l l  
// o d