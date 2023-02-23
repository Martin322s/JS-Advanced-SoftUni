function listOfNames(input) {

    // let sortedArr = input.sort((a, b) => {
    //     return a.localeCompare(b);
    // });

    // let sortedArrL = sortedArr.length;

    // for (let i = 0; i < sortedArrL; i++) {
    //     console.log(`${i + 1}.${sortedArr[i]}`);
    // }

    input.sort();
    for (let i = 1; i <= input.length; i++) {
        console.log(i + '.' + input[i-1]);
    }
}
listOfNames(["John", "bob", "Christina", "Ema"]);