/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 * @param {Array<Array>} matrix
 * @return {Number}
  * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 * * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const mat = matrix;
  for (let i = 0; i < mat.length - 1; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        mat[i + 1][j] = 0;
      }
    }
  }
  return mat.join(',').split(',').map(Number).reduce((a, b) => a + b);
}
module.exports = getMatrixElementsSum;
