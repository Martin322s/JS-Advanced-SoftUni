function calc() {

    const numOne = document.getElementById('num1').value;
    const numTwo = document.getElementById('num2').value;
    const sumElement = document.getElementById('sum');

    let sum = Number(numOne) + Number(numTwo);
    sumElement.value = sum;
}
