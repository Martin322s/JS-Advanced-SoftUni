function smallestTwoNumbers(input) {
    let sortedArr = input.sort((a, b) => a - b);
    let firstSmallNumber = sortedArr[0];
    let secondSmallNumber = sortedArr[1];

    console.log(firstSmallNumber + ' ' + secondSmallNumber);
}