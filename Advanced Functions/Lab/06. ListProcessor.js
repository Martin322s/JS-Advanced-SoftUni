function solve(input) {

    let result = [];

    for (let element of input) {
        let arr = element.split(' ');

        if (arr[0] === 'add') {
            result.push(arr[1]);
        } else if (arr[0] === 'remove') {
            let index = result.indexOf(arr[1]);
            result.splice(index, 1);
        } else if (arr[0] === 'print') {
            console.log(result.join(','));
        }
    }
}
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);