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
  var message = phrase.split('');
  message.forEach(function(letter){
    console.log(letter);
  });
  return message;
}

it('should split the phrase into characters and add them to an array', () => {
  const pressesFunc = presses('LOL');
  expect(pressesFunc).toEqual(['L', 'O', 'L']);
});
