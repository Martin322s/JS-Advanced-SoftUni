function smallestNumbers(input) {

    let resultArr = [];
    let sortedArray = input.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < 2; i++) {
        resultArr.push(sortedArray[i]);
    }

    console.log(resultArr.join(' '));
}
smallestNumbers([30, 15, 50, 5]);