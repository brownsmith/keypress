function presses(phrase) {
  var keyArray = [
    [],
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'I'],
    ['J', 'K', 'L'],
    ['M', 'N', 'O'],
    ['P', 'Q', 'R', 'S'],
    ['T', 'U', 'V'],
    ['W', 'X', 'Y', 'Z']
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

it('should return the position of each letter in their array added together', () => {
  const pressesFunc = presses('LOL');
  expect(pressesFunc).toEqual(9);
});

it('should return the position of each letter in their array added together', () => {
  const pressesFunc = presses('PAUL');
  expect(pressesFunc).toEqual(7);
});

it('should return the position of each letter in their array added together', () => {
  const pressesFunc = presses('BROWNSMITH');
  expect(pressesFunc).toEqual(22);
});

it('should add 1 for a space', () => {
  const pressesFunc = presses('PAUL BROWNSMITH');
  expect(pressesFunc).toEqual(30);
});
