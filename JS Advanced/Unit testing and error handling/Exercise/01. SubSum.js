function subSum(array, start, end) {


    const reducer = (previousValue, currentValue) => previousValue + currentValue;

    if (!Array.isArray(array)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, array.length - 1);

    let sum = array.map(Number).slice(startIndex, endIndex + 1).reduce(reducer, 0);

    return sum;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);