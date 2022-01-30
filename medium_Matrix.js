let matrix = [
    [7, 8, 7],
    [5, 4, 2],
    [8, 6, 7]
];
console.log(compute(matrix))



function compute(matrix) {
    let noOfColn = matrix[0].length
    let noOfRows = matrix.length
    let soln = []
    for (let i = 0; i < noOfRows; i++) {
        let currRowMax = matrix[i][0]
        let indx = 0
        for (let j = 1; j < noOfRows; j++) {
            if (matrix[i][j] > currRowMax) {
                currRowMax = matrix[i][j];
                indx = j;
            }
        }

        let k;
        for (k = 0; k < noOfColn; k++)
            if (currRowMax > matrix[k][indx])
                break;

        if (k == noOfColn) {
            soln.push(currRowMax);
        }
    }

    return soln
}
