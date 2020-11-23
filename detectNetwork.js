function detectNetwork(cardNumber, cardData) {
  var prefix = cardNumber[0] + cardNumber[1];
  console.log(prefix)
  console.log(cardData.prefixes)

  if (cardData.prefixes.indexOf(prefix) === 1) {
      return cardData['issuer/network']
  } else {
      return undefined;
  }
  
}

var cardData = [
  {
    'issuer/network': 'Visa',  // card issuer (network)
    prefixes: ['4'],	       // beginning digits
    lengths: [13, 16, 19]      // lengths of card numbers
  },
  {
    'issuer/network': 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    'issuer/network': 'American Express',
    prefixes: ['34', '37'],
    lengths: [15]
  },
  {
    'issuer/network': 'Diner\'s Club',
    prefixes: ['38', '39'],
    lengths: [14]
  }
];


// example
var network = detectNetwork('343456789012345', cardData);
console.log(network); // --> 'American Express'