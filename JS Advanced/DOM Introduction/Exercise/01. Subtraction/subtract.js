function subtract() {

    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    let numOne = Number(firstNumber.value);
    let numTwo = Number(secondNumber.value);
    let result = numOne - numTwo;

    resultElement.textContent = result;
}