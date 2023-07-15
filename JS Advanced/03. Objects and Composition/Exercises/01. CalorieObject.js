function calorieObject(input) {
    let result = {};
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i += 2) {
        result[input[i]] = Number(input[i + 1]);
    }

    console.log(result);
}