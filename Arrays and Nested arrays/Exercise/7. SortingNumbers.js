function sortingNumbers(input) {

    let array = [];
    let sortedArr = input.sort((a,b) => {
        return a-b;
    });

    while (sortedArr.length !== 0) {
        array.push(sortedArr.shift());
        array.push(sortedArr.pop());
    };

    array = array.filter((el) => {
        return typeof el !== 'undefined';
    });

    return array;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);