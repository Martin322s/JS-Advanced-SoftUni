function biggestElements(arr) {

    let largest = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (largest < arr[i][j])
                largest = arr[i][j];
        }
    }
    
    return largest;
}
biggestElements();