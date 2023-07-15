function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let result = [];

        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    }

    Array.prototype.take = function (n) {
        let result = [];

        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }

        return result;
    }

    Array.prototype.sum = function () {
        let sum = 0;

        for (let i = 0; i < this.length; i++) {
            sum += Number(this[i]);
        }

        return sum;
    }

    Array.prototype.average = function () {
        let sum = 0;
        let average = 0;

        for (let i = 0; i < this.length; i++) {
            sum += Number(this[i]);
            average = Math.ceil(sum / this.length);
        }

        return average;
    }
}