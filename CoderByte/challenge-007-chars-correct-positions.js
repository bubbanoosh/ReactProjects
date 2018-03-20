/**
 * 
 * @param {*} str 
 * Have the function SimpleSymbols(str) take the str parameter being passed 
 * and determine if it is an acceptable sequence by either 
 * returning the string true or false. 
 * The str parameter will be composed of + and = symbols 
 * with several letters between them (ie. ++d+===+c++==a) 
 * and for the string to be true each letter must be surrounded by a + symbol. 
 * So the string to the left would be false. 
 * The string will not be empty and will have at least one letter. 
 */
function CharsInCertainPositions(str) {
    str = '=' + str.toLowerCase() + '=', pass = 'false'
    const regExp = /[A-Z]/gi
    for (var i = 0 ; i < str.length ; i++) {
        if (str[i].match(regExp)) { if (str[i-1] === '+' && str[i+1] === '+') { pass = 'true'; continue } else { pass = 'false'; break } } 
    }
    return pass
}
     
  console.log(CharsInCertainPositions("f++d+"))