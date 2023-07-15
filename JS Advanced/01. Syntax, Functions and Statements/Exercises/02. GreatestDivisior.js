function greatestDivisior(numOne, numTwo) {
    let result = 0;

    while (numOne !== numTwo) {
        if (numOne >= numTwo) {
            numOne -= numTwo;
        } else {
            numTwo -= numOne;
        }
        result = numOne;
    }

    console.log(result);
}