function sameNumbers(number) {

    let numberAsString = number.toString();
    let isSame = true;
    let numberToCompare = numberAsString[0];
    let sum = 0;

    let array = numberAsString.split('');
    let arrayL = array.length;

    for (let i = 0; i < arrayL; i++) {
        if (array[i] === numberToCompare) {
            isSame = true;
        } else {
            isSame = false;
        }
        sum += Number(array[i]);
    }

    console.log(isSame);
    console.log(sum);
}
sameNumbers(220222);