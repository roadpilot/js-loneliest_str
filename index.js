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