var translate = function(str){
    var result = '';
    var wordArr = str.split(' ');
    var resultArr = wordArr.map(word => translateToPigLatin(word));
    result = resultArr.join(' ');   
    return result;
};

var translateToPigLatin = function(word){
    var consonant = /[^aeiou]/;
    var newWord = word;
    var currentLetterIndex = 0;
    while (consonant.test(word[currentLetterIndex]) || word[currentLetterIndex-1] === 'q'){
        currentLetterIndex++;
    };
    newWord = word.substring(currentLetterIndex, word.length) + word.substr(0,currentLetterIndex);
    newWord += 'ay';
    return newWord;
};
  
