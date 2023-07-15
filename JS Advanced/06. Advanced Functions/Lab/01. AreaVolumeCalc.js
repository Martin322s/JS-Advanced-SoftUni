function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let array = JSON.parse(input);
    let result = [];

    array.forEach(x => {
        result.push({ area: area.call(x, x.x, x.y), volume: vol.call(x, x.x, x.y, x.z) });
    });

    return result;
}