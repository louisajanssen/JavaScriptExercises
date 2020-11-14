function flipEveryWord(string) {
    flipped = '';
    var words = string.split(' ');

    for (var i = 0; i < words.length; i++) {
        var currentWord = words[i];
        var reversed = reverse(currentWord);
        flipped += reversed;
    }
    return reversed;
  }
  
  //Example:
  var input = 'Miko is a good boy';
  var output = flipEveryWord(input);
  console.log(output); 