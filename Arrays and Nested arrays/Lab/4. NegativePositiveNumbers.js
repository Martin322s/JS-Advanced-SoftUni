function negativeNumbers(input) {

    const array = input;
    const resultArray = [];

    for (let item of array) {
        if (item < 0) {
            resultArray.unshift(item);
        } else {
            resultArray.push(item);
        }
    }

    for (let item of resultArray) {
        console.log(item);
    }
}
negativeNumbers([7, -2, 8, 9]);