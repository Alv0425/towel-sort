
// You should implement your task here.

module.exports = function towelSort (matrix) {
    //return empty array if no params passed
    if (typeof(matrix) == 'undefined') {
        return [];
    }
    //towel sort
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i].reverse();
    }
    //return sorted matrix
    return [].concat(...matrix);
}
