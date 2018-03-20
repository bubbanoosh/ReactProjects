/**
 *  * @param {*} str 
 * Have the function LetterChanges(str) take the str parameter being passed 
 * and modify it using the following algorithm. 
 * Replace every letter in the string with the letter following it in the alphabet 
 * (ie. c becomes d, z becomes a). 
 * Then capitalize every vowel in this new string (a, e, i, o, u) 
 * and finally return this modified string. 
 */
function LetterChanges(str) { 
    let nextLetters = str.replace(/[a-z]/gi, (char) => { 
      return (char.toLowerCase() === 'z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
    });
    let changedToCaps = nextLetters.replace(/a|e|i|o|u/gi, (vowels) => { 
      return vowels.toUpperCase();
    });
    return changedToCaps;
  }
     
  console.log(LetterChanges("Here are the words that contain letters..."))