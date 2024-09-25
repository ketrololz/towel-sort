
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedArr = []
  matrix === undefined ? sortedArr : 

  matrix.forEach((e) => {
    if (matrix.indexOf(e) % 2 === 0) {
      sortedArr.push(e)
    } else {
      for (let i = 0; i < e.length; i++) {
        sortedArr.push(e[e.length - 1 - i])
      }
    }
  })
  return sortedArr.flat();
}
