function roadRadar(speed, area) {

    let motorWayLimit = 130;
    let interStateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;

    if (area === 'motorway') {
        if (speed <= motorWayLimit) {
            console.log(`Driving ${speed} km/h in a ${motorWayLimit} zone`);
        } else if (speed <= motorWayLimit + 20) {
            console.log(`The speed is ${speed - motorWayLimit} km/h faster than the allowed speed of ${motorWayLimit} - speeding`);
        } else if (speed <= motorWayLimit + 40) {
            console.log(`The speed is ${speed - motorWayLimit} km/h faster than the allowed speed of ${motorWayLimit} - excessive speeding`);
        } else if (speed > motorWayLimit + 40) {
            console.log(`The speed is ${speed - motorWayLimit} km/h faster than the allowed speed of ${motorWayLimit} - reckless driving`);
        }
    } else if (area === 'interstate') {
        if (speed <= interStateLimit) {
            console.log(`Driving ${speed} km/h in a ${interStateLimit} zone`);
        } else if (speed <= interStateLimit + 20) {
            console.log(`The speed is ${speed - interStateLimit} km/h faster than the allowed speed of ${interStateLimit} - speeding`);
        } else if (speed <= interStateLimit + 40) {
            console.log(`The speed is ${speed - interStateLimit} km/h faster than the allowed speed of ${interStateLimit} - excessive speeding`);
        } else if (speed > interStateLimit + 40) {
            console.log(`The speed is ${speed - interStateLimit} km/h faster than the allowed speed of ${interStateLimit} - reckless driving`);
        }
    } else if (area === 'city') {
        if (speed <= cityLimit) {
            console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
        } else if (speed <= 20 + cityLimit) {
            console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - speeding`);
        } else if (speed <= 40 + cityLimit) {
            console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - excessive speeding`);
        } else if (speed > 40 + cityLimit) {
            console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - reckless driving`);
        }
    } else if (area === 'residential') {
        if (speed <= residentialLimit) {
            console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
        } else if (speed <= residentialLimit + 20) {
            console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - speeding`);
        } else if (speed <= residentialLimit + 40) {
            console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - excessive speeding`);
        } else if (speed > residentialLimit + 40) {
            console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - reckless driving`);
        }
    }
}
roadRadar();