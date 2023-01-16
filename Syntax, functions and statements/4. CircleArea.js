function circleArea(param) {

    let typeOfParam = typeof param;
    let result = 0;

    if (typeOfParam !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfParam}.`);
    } else {
        result = Math.PI * param ** 2;
        console.log(result.toFixed(2));
    }
}
circleArea(5);