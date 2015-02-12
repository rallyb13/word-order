var wordOrder = function(phrase) {

  var phraseSplit = phrase.split(" ");
  var myWord;
  var howMany;
  var uniqueSet = [];
  var myWordsOne = [];
  var myWordsTwo = [];

  phraseSplit.forEach(function(word) {
    if (uniqueSet.indexOf(word) === -1) {
      uniqueSet.push(word);
    }
  });

  uniqueSet.forEach(function(uniqueWord) {
    var reGlobal = new RegExp(uniqueWord, 'g');
    var reLocal = new RegExp(uniqueWord);
    howMany = phrase.match(reGlobal).length;
    if (howMany > 1) {
      myWord = phrase.match(reLocal);
      myWordsTwo.push(myWord);
    } else if (howMany === 1) {
      myWord = phrase.match(reLocal);
      myWordsOne.push(myWord);
    }
  });
 
    return myWordsTwo[0].concat(myWordsOne[0]);
};
