function diagonalSums(input) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0; i < input.length; i++) {
        mainDiagonalSum += input[i][i];
        secondaryDiagonalSum += input[i][input.length - 1 - i];
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}