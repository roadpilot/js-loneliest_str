function loneliest(str) {
  console.log(str.split(/[a-z]/))
//   console.log(str.includes(' '))
  if (str.includes(' ')){
//     str = str.trim()
    alpha = {}
    let spacecount = 0
    const arr = str.trim().split('')
    for (let i=0; i<arr.length; i++){
      if (arr[i] !== ' ') {
        console.log(arr[i])
        spacecount = 0
      }
        spacecount++
    }
    console.log(spacecount)
  } else {
    return str.split('')
  }
//   return Array(str)
}

function loneliest(str) {
    let trimmed = str.trim();
    let left = 0
    let right = 0
    let spaces = 0
    let lonelyArray = []
​
    if (trimmed.length === 1) return [trimmed[0]]
​
​
    for (let i = 0; i < trimmed.length; i++) {
        if (trimmed[i] === ' ') {
            continue
        }
        right = 0;
        for (let j = 1; trimmed[i + j] === ' '; j++) {
            right++
        }
        if (left + right > spaces) {
            spaces = left + right;
            lonelyArray = [trimmed[i]];
        }
        else if (left + right === spaces) {
            lonelyArray.push(trimmed[i])
        }
        left = right
    }
    return lonelyArray
};