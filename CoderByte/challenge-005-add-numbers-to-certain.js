/**
 * 
 * @param {*} ceiling 
 * Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
 * For example: if the input is 4 then your program should return 10 
 * because 1 + 2 + 3 + 4 = 10. For the test cases, 
 * the parameter num will be any number from 1 to 1000. 
 */
function AddNumbersToCertain(num) {
    let arrNums = []
    for (var i=1 ; i <= num ; i++) {
        arrNums.push(i)
    }
    return isNaN(num) || num < 1 || arrNums.length === 0 ? 0 : (arrNums.reduce((accumulated, curVal) => accumulated + curVal))
}

console.log(AddNumbersToCertain('t'))