function argumentsInfo() {
    let result = {};
    let count = 0;

    for (let argument of arguments) {
        console.log(`${typeof argument}: ${argument}`);

        if (!result[typeof argument]) {
            result[typeof argument] = count;
        }

        if (result.hasOwnProperty(typeof argument)) {
            result[typeof argument] = ++result[typeof argument];
        }
    }

    let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);
    sortedResult.forEach(x => console.log(`${x[0]} = ${x[1]}`));
}