//Flip every chunk of n characters in a string, where n is any positive integer greater than 1.
//Note that this is intentionally very similar to the previous problem.
//Please focus on getting a working solution with the tools you know well
//Practice the interactive/collaborative interview style that's described in the documentation.
function flipEveryNChars(string, n) {
  var flip = '';
  var splitChars = string.split('');
  for (var i = 0; i < splitChars.length; i += n) {
    var slice = splitChars.slice(i, i + n);
    var reverse = slice.reverse();
    var join = reverse.join('');

    flip += join;
  }
  return flip;
}

//Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma