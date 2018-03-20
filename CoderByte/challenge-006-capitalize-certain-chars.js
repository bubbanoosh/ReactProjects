/**
 * 
 * @param {*} str 
 * Have the function LetterCapitalize(str) take the str parameter being passed 
 * and capitalize the first letter of each word.
 * Words will be separated by only one space. 
 */
function LetterCapitalize(str) { 
    let words = str.split(' '), returned = []
    for (var i = 0 ; i < words.length ; i++) {
        returned.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
    }
    return returned.join(' ')
}
     
  console.log(LetterCapitalize("Here are the words that contain letters..."))