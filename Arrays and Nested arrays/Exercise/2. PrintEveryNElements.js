function printEveryElement(input, step) {

    let resultArray = [];
    let inputL = input.length;

    for (let i = 0; i < inputL; i += step) {
        resultArray.push(input[i]);
    }

    return resultArray;
}
printEveryElement(['5', '20', '31', '4', '20'], 2);