function calorieHack(input) {

    let obj = {};
    let inputL = input.length;

    for (let i = 0; i < inputL; i += 2) {
        let currentProduct = input[i];
        let currentCalorie = Number(input[i + 1]);

        obj[currentProduct] = currentCalorie;
    }

    console.log(obj);
}
calorieHack(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);