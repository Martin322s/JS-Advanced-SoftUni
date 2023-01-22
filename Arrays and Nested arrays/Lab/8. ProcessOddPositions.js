function oddPositions(input) {

    let result = [];
    let inputL = input.length;

    for (let i = 0; i < inputL; i++) {
        if (i % 2 !== 0) {
            result.push(input[i] * 2);
        }
    }

    let reversed = result.reverse();

    return reversed.join(' ');
}
oddPositions([10, 15, 20, 25]);