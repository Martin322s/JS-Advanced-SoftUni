function extractSubset(input) {
    let max = Number.MIN_SAFE_INTEGER;

    let outputArray = input.reduce((accumulator, currentValue) => {
        if (currentValue >= max) {
            max = currentValue;
            accumulator.push(max);
        }

        return accumulator;
    }, []);

    return outputArray;
}