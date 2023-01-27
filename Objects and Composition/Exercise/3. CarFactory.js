function carFactory(input) {

    let resultObj = {};
    let engine = {};
    let carriage = {};
    

    resultObj.model = input.model;

    if (input.power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
    } else if (input.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    } else if (input.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    resultObj.engine = engine;
    carriage.type = input.carriage;
    carriage.color = input.color;

    resultObj.carriage = carriage;

    if (input.wheelsize % 2 === 0) {
        input.wheelsize--;
    }
    let wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];
    resultObj.wheels = wheels;

    return resultObj;
}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});