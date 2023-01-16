function squareOfStars(input) {

    if (!input) {
        for (let i = 5; i > 0; i--) {
            console.log('* '.repeat(5));
        }
    } else {
        for (let i = input; i > 0; i--) {
            console.log('* '.repeat(input));
        }
    }
}
squareOfStars(2);