function biggerHalf(input) {
    let result = [];
    let sortedArr = input.sort((a, b) => a - b);
    let limit = Math.ceil(sortedArr.length / 2);

    if (sortedArr.length % 2 !== 0) {
        for (let i = sortedArr.length; i >= limit; i--) {
            result.push(sortedArr[i - 1]);
        }
    } else {
        for (let i = sortedArr.length; i > sortedArr.length / 2; i--) {
            result.push(sortedArr[i - 1]);
        }
    }

    return result.reverse();
}