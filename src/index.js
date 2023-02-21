
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.join("") === "") return [];
  else {
    let newMatrix = [];
    for (index = 0; index < matrix.length; ++index) {
      if (index % 2 === 0) newMatrix.push(matrix[index]);
      else newMatrix.push(matrix[index].reverse());
    }
    return newMatrix.flat();
  }
}
