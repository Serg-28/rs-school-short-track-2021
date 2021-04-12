/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let result;
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    if (array[start] === value) {
      result = start;
      break;
    }
    if (array[end] === value) {
      result = end;
      break;
    }
    start++;
    end--;
  }
  return result;
}

module.exports = findIndex;
