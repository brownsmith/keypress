function presses(phrase) {
  var keyArray = [
    ['1'],
    ['A', 'B', 'C', '2'],
    ['D', 'E', 'F', '3'],
    ['G', 'H', 'I', '4'],
    ['J', 'K', 'L', '5'],
    ['M', 'N', 'O', '6'],
    ['P', 'Q', 'R', 'S', '7'],
    ['T', 'U', 'V', '8'],
    ['W', 'X', 'Y', 'Z', '9'],
    [' ', '0']
  ];

  findValueInArray = (letter, array) => {
    if (letter === ' ') {
      return 1;
    }
    array.filter(function(arrayItem) {
      result = arrayItem.find(function(arrayletter) {
        var letterIndex = letter === arrayletter ? arrayItem.indexOf(letter) + 1 : false;
        if (letterIndex) {
          amountOfKeyPresses = letterIndex;
        }
      });
    });
    return amountOfKeyPresses;
  }

  var message = phrase.split('');
  var someArray = [];
  var hmmm;

  message.forEach(function(letter){
    someArray.push(findValueInArray(letter, keyArray));
  });
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return someArray.reduce(reducer);
}

it('should return 9 for the word \'LOL\'', () => {
  const pressesFunc = presses('LOL');
  expect(pressesFunc).toEqual(9);
});

it('should return 7 for the name \'PAUL\'', () => {
  const pressesFunc = presses('PAUL');
  expect(pressesFunc).toEqual(7);
});

it('should return 22 for the name \'BROWNSMITH\'', () => {
  const pressesFunc = presses('BROWNSMITH');
  expect(pressesFunc).toEqual(22);
});

it('should handle spaces by returning 30 for the name \'PAUL BROWNSMITH\'', () => {
  const pressesFunc = presses('PAUL BROWNSMITH');
  expect(pressesFunc).toEqual(30);
});

it('should handle numbers by returning 17 for the phrase \'C U L8R\'', () => {
  const pressesFunc = presses('C U L8R');
  expect(pressesFunc).toEqual(17);
});
