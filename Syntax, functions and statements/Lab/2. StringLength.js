function stringLength(strOne, strTwo, strThree) {

    let stringSum = strOne.length + strTwo.length + strThree.length;
    let avgSum = Math.round(stringSum / 3);

    console.log(stringSum);
    console.log(avgSum);
}
stringLength('chocolate', 'ice cream', 'cake');