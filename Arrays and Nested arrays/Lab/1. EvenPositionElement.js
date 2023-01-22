function evenElemnts(input) {

    let inputArr = input;
    let inputL = inputArr.length;
    let result = [];

    for (let i = 0; i < inputL; i++) {
        if (i % 2 === 0) {
            result.push(inputArr[i]);
        }
    }

    console.log(result.join(' '));
}
evenElemnts(['5', '10']);