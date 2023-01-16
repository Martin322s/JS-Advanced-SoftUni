function rotateArray(input, rotations) {

    for (let i = 0; i < rotations; i++) {
        let lastEl = input.pop();
        input.unshift(lastEl);
    }

    console.log(input.join(' '));
}
rotateArray(['1', '2', '3', '4'], 2);