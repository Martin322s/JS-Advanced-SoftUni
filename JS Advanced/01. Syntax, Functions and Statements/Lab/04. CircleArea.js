function circleArea(radius) {
    let area = 0;

    if (typeof radius !== "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    } else {
        area = Math.PI * (radius ** 2);
        console.log(area.toFixed(2));
    }
}