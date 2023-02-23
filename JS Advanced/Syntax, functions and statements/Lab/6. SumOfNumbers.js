function sumOfNumbers(paramN, paramM) {

    let numOne = Number(paramN);
    let numTwo = Number(paramM);
    let sum = 0;

    for (let i = numOne; i <= numTwo; i++) {
        sum += i;
    }

    console.log(sum);
}
sumOfNumbers('-8', '20');