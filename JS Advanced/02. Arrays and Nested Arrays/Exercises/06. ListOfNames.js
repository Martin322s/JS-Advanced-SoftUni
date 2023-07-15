function listOfNames(input) {
    let sortedArray = input.sort((a, b) => a.localeCompare(b));
    
    sortedArray.forEach((x, index) => {
        console.log(`${++index}.${x}`);
    });
}