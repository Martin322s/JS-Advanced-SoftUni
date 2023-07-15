function aggregateElements(arrayOfNumbers) {
    let sum = 0;
    let inverseSum = 0;
    let concatenatedElements;

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }

    for (let el of arrayOfNumbers) {
        inverseSum += 1 / el;
    }

    concatenatedElements = arrayOfNumbers.join('');

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenatedElements);
}