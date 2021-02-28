module.exports = function towelSort (matrix) {
  let arr = new Array
  if (!matrix) return arr
  for (item of matrix) {
    Number.isInteger((matrix.indexOf(item) + 1)/2) ? arr.push(item.reverse()) : arr.push(item)
  } return arr.flat()
}