function sumOfNumbers(numOne, numTwo) {
    let result = 0;
    let parsedNumOneN = Number(numOne);
    let paresedNumTwoM = Number(numTwo);

    for(let i = parsedNumOneN; i <= paresedNumTwoM; i++) {
        result += i;
    }

    return result;
}