
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (matrix === undefined || matrix.length === 0) return [];

  let resultArr = [];
  for (let i = 0; i <= matrix.length - 1; i++) {
    if (i % 2 == 0) {
      resultArr = resultArr.concat(matrix[i]);
    } else {
      resultArr = resultArr.concat(matrix[i].sort((a, b) => b - a));
    }   
  }
  return resultArr;
}
