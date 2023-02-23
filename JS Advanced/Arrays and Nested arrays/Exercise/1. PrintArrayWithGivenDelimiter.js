function printArray(input, delimiter) {

    let operator = delimiter;
    let inputArray = input;

    console.log(inputArray.join(operator));
}
printArray(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');