function presses(phrase) {
  const keyArray = [
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

  findValueInArray = (letterInMessage, array) => {
    let amountOfKeyPresses;
    if (letterInMessage === ' ') {
      return 1;
    }
    array.filter(function(arrayItem) {
      result = arrayItem.find(function(arrayletter) {
        const letterIndex = letterInMessage === arrayletter ? arrayItem.indexOf(letterInMessage) + 1 : false;
        if (letterIndex) {
          amountOfKeyPresses = letterIndex;
        }
      });
    });
    return amountOfKeyPresses;
  }

  const message = phrase.split('');
  const resultArray = [];

  message.forEach(function(letterInMessage){
    resultArray.push(findValueInArray(letterInMessage, keyArray));
  });
  
  return resultArray.reduce((accumulator, currentValue) => accumulator + currentValue);
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

it('should handle spaces by returning 23 for the phrase \'AS YOU WERE\'', () => {
  const pressesFunc = presses('AS YOU WERE');
  expect(pressesFunc).toEqual(23);
});

it('should handle numbers by returning 17 for the phrase \'C U L8R\'', () => {
  const pressesFunc = presses('C U L8R');
  expect(pressesFunc).toEqual(17);
});

it('should handle numbers by returning 11 for the phrase \'C3PO\'', () => {
  const pressesFunc = presses('C3PO');
  expect(pressesFunc).toEqual(11);
});

it('should handle numbers by returning 12 for the phrase \'R2D2\'', () => {
  const pressesFunc = presses('R2D2');
  expect(pressesFunc).toEqual(12);
});
