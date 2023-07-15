function townPopulation(input) {
    let result = {};

    for (let element of input) {
        let [key, value] = element.split(' <-> ');

        if (result[key]) {
            result[key] = result[key] + Number(value);
        } else {
            result[key] = Number(value);
        }
    }

    for (key in result) {
        console.log(`${key} : ${result[key]}`);
    }
}