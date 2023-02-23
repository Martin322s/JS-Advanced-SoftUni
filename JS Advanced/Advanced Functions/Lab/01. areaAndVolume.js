function solve(area, vol, input) {

    const object = JSON.parse(input);

    function calc(object) {
        let areaObj = Math.abs(area.call(object));
        let volObj = Math.abs(vol.call(object));

        return {
            area: areaObj,
            vol: volObj
        }
    }

    return object.map(calc);
}

solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`);

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};