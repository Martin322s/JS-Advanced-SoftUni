function biggerHalf(input) {

    let sortedArr = input.sort((a,b) => {
        return a - b;
    });

    let half = Math.ceil(sortedArr. length / 2);
    let firstHalf = sortedArr.splice(-half);
    let secondHalf = sortedArr.splice(0, half);

    return firstHalf;
}
biggerHalf([4, 7, 2, 5]);