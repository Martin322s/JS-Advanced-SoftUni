function biggestElement(input) {
    let result = [];
    let biggestNumber = 0;

    input.map(x => x.sort((a, b) => a - b));
    input.forEach(x => result.push(x[x.length - 1]));
    biggestNumber = result.sort((a, b) => b - a)[0];

    return biggestNumber;
}