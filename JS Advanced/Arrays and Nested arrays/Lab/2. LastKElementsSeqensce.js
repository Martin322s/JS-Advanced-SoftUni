function lastElements(n, k) {

    let nums = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let previous = i - 1;
        for (let j = k; j > 0; j--) {
            if (previous >= 0) {
                sum += nums[previous];
            }
            previous--;
        }
        nums.push(sum);
    } 

    return nums;
}
lastElements(6, 3);