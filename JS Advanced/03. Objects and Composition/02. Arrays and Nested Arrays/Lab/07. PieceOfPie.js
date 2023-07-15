function pieceOfPie(inputArray, targetStart, targetEnd) {
    let result = [];
    let startIndex = inputArray.indexOf(targetStart);
    let endIndex = inputArray.lastIndexOf(targetEnd);

    result = inputArray.slice(startIndex, endIndex + 1);
    
    return result;
}