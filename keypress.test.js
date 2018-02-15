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
    // var letter = letter;
    // var result = '';
    // var moo = '';
    array.filter(function(arrayItem) {
      result = arrayItem.find(function(arrayletter) {
        // console.log(arrayletter); // A B C ...
        // console.log(letter); // L O L
        // console.log(arrayItem); // ['A', 'B', 'C'] ...

        // console.log(letter === arrayletter ? arrayItem.indexOf(letter) + 1 : false);
        var ooo = letter === arrayletter ? arrayItem.indexOf(letter) + 1 : false;
        if (ooo) {
          moo = ooo;
        }
      });
    });
    // console.log(moo);
    return moo;
  }

  var message = phrase.split('');
  message.forEach(function(letter){
    console.log(findValueInArray(letter, keyArray));
    findValueInArray(letter, keyArray);
  });
  return message;
}

it('should split the phrase into characters and add them to an array', () => {
  const pressesFunc = presses('LOL');
  expect(pressesFunc).toEqual(['L', 'O', 'L']);
});

it('should return the position of each letter in their array added together', () => {
  const pressesFunc = presses('LOL');
  expect(pressesFunc).toEqual(9);
});
