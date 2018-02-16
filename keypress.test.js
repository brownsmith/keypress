function keyboardArray() {
  return [
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
}

function presses(phrase) {
  const keyArray = keyboardArray();
  const message = phrase.toUpperCase().split('');
  const resultArray = [];

  function findValueInArray(letterInMessage, array) {
    let amountOfKeyPresses;
    letterInMessage === ' ' ? 1 : letterInMessage;

    array.filter(function(arrayItem) {
      arrayItem.find(function(arrayletter) {
        const letterIndex = letterInMessage === arrayletter ? arrayItem.indexOf(letterInMessage) + 1 : false;
        if (letterIndex) {
          amountOfKeyPresses = letterIndex;
        }
      });
    });
    return amountOfKeyPresses;
  }

  message.forEach(function(letterInMessage){
    resultArray.push(findValueInArray(letterInMessage, keyArray));
  });
  
  return resultArray.reduce((accumulator, currentValue) => accumulator + currentValue);
}

it('should allow input in lower case', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('hello');
  expect(pressesFunc).toEqual(13); // eslint-disable-line no-undef
});

it('should allow input in lower case with spaces', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('c u l8r');
  expect(pressesFunc).toEqual(17); // eslint-disable-line no-undef
});

it('should return 9 for the word \'LOL\'', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('LOL');
  expect(pressesFunc).toEqual(9); // eslint-disable-line no-undef
});

it('should return 7 for the name \'PAUL\'', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('PAUL');
  expect(pressesFunc).toEqual(7); // eslint-disable-line no-undef
});

it('should return 22 for the name \'BROWNSMITH\'', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('BROWNSMITH');
  expect(pressesFunc).toEqual(22); // eslint-disable-line no-undef
});

it('should handle spaces by returning 30 for the name \'PAUL BROWNSMITH\'', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('PAUL BROWNSMITH');
  expect(pressesFunc).toEqual(30); // eslint-disable-line no-undef
});

it('should handle spaces by returning 23 for the phrase \'AS YOU WERE\'', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('AS YOU WERE');
  expect(pressesFunc).toEqual(23); // eslint-disable-line no-undef
});

it('should handle numbers by returning 17 for the phrase \'C U L8R\'', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('C U L8R');
  expect(pressesFunc).toEqual(17); // eslint-disable-line no-undef
});

it('should handle numbers by returning 11 for the phrase \'C3PO\'', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('C3PO');
  expect(pressesFunc).toEqual(11); // eslint-disable-line no-undef
});

it('should handle numbers by returning 12 for the phrase \'R2D2\'', () => { // eslint-disable-line no-undef
  const pressesFunc = presses('R2D2');
  expect(pressesFunc).toEqual(12); // eslint-disable-line no-undef
});