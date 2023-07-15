function subSum(array, startIndex, endIndex) {
    let result = [];
    let sum = 0;

    if (!Array.isArray(array)) {
        return NaN;
    }

    startIndex = startIndex < 0 ? 0 : startIndex;
    endIndex = endIndex > array.length ? array.length - 1 : endIndex;

    result = array.slice(startIndex, endIndex + 1).map(Number);
    sum = result.reduce((acc, value) => { return acc + value }, 0);

    return sum;
}