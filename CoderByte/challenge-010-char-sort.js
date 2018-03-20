function SortChars(str) { 
    let arr = []
    str = str.replace(' ', '')
    for (var i = 0 ; i < str.length ; i++) {
        arr.push(str.substring(i, i+1))
    }
    return arr.sort().slice(1).join('');
}
  console.log(SortChars("cod erbyt gggerere"))