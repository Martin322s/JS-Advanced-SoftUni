function sameNumbers(input) {
    let inputAsArray = input.toString().split('');
    let numberForCompare = inputAsArray[0];
    let areSame = false;
    let sum = 0;
    let result = inputAsArray.filter(x => x !== numberForCompare);
    inputAsArray.map(Number).forEach(x => sum += x);

    if (result.length > 0) {
        areSame = false;
        console.log(areSame);
        console.log(sum);
    } else {
        areSame = true;
        console.log(areSame);
        console.log(sum);
    }
}