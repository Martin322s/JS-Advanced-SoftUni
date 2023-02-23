function firstAndLast(input) {

    const arr = input;
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());

    let sum = firstElement + lastElement;

    console.log(sum);
}
firstAndLast(['20', '30', '40']);