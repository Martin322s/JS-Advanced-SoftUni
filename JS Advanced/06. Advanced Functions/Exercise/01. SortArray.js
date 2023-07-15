function sortArray(array, order) {
    let result = [];

    if (order === "asc") {
        result = array.sort((a, b) => a - b);
    } else {
        result = array.sort((a, b) => b - a);
    }

    return result;
}