function rotateArray(inputArr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let lastElement = inputArr.pop();
        inputArr.unshift(lastElement);
    }

    console.log(inputArr.join(' '));
}