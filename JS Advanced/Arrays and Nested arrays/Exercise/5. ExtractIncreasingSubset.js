function extractSubset(input) {

    let max = Number.MIN_SAFE_INTEGER;

    let outputArray = input.reduce((acc, val) => {
        if (val >= max) {
            max = val;
            acc.push(max);
        }

        return acc;
    }, []);

    return outputArray;
}
extractSubset([20, 3, 2, 15, 6, 1]);