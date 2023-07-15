function negativePositiveNumbers(input) {
    let result = [];

    for (let num of input) {
        if (num >= 0) {
            result.push(num);
        } else {
            result.unshift(num);
        }
    }

    console.log(result.join('\n'));
}