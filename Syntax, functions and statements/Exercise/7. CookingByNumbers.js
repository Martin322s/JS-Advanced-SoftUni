function cookingByNumbers(num, p1, p2, p3, p4, p5) {

    let inputNumber = Number(num);
    let arrOfCommands = [p1, p2, p3, p4, p5];

    for (let action of arrOfCommands) {
        if (action === 'chop') {
            inputNumber /= 2;
            console.log(inputNumber);
        } else if (action === 'dice') {
            inputNumber = Math.sqrt(inputNumber);
            console.log(inputNumber);
        } else if (action === 'spice') {
            inputNumber += 1;
            console.log(inputNumber);
        } else if (action === 'bake') {
            inputNumber *= 3;
            console.log(inputNumber);
        } else {
            let delay = inputNumber * 0.20;
            inputNumber -= delay;
            console.log(inputNumber);
        }
    }
}
cookingByNumbers();