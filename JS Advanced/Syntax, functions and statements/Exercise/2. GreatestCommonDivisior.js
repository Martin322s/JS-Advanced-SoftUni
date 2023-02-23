function greatestDivisior(numOne, numTwo) {

    let firstNumber = numOne;
    let secondNumber = numTwo;

    while (firstNumber != secondNumber) {
        if (firstNumber > secondNumber) {
            firstNumber -= secondNumber;
        } else {
            secondNumber -= firstNumber;
        }
    }
    console.log(firstNumber);
}
greatestDivisior(5,10);