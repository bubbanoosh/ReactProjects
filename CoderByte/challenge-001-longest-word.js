/*
Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. 
If there are two or more words that are the same length, 
return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 
*/
function LongestWord(sen) { 
    sen = sen.replace(/[^a-zA-Z ]/ig, '');
    var words = sen.split(' ');
    var lWord = sen[0];
    for (var i=0 ; i < words.length ; i++) {
        if (words[i].length > lWord.length) {
            lWord = words[i];
        }
    }
    return lWord;
  }

  console.log(LongestWord('here are the words that contain a word montain'))