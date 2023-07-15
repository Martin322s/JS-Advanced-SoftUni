function squareOfStars(input) {
    let squareSides = Number(input);

    for (let i = 0; i < squareSides; i++) {
        console.log("* ".repeat(squareSides));
    }
}