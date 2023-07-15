function stringLength(stringOne, stringTwo, stringThree) {
    let stringOneLength = stringOne.length;
    let stringTwoLength = stringTwo.length;
    let stringThreeLength = stringThree.length;

    let sum = stringOneLength + stringTwoLength + stringThreeLength;
    let avg = Math.floor(sum / 3);

    console.log(sum);
    console.log(avg);
}