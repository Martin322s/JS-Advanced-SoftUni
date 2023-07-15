(function () {
    // ensureStart
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    // ensureEnd
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };

    // isEmpty
    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    // truncate
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return ".".repeat(n);
        }

        const words = this.split(" ");
        let truncated = words[0];

        for (let i = 1; i < words.length; i++) {
            if (truncated.length + words[i].length + 4 > n) {
                break;
            }
            truncated += " " + words[i];
        }

        return truncated.slice(0, n - 3) + "...";
    };

    // format
    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace("{" + i + "}", params[i]);
        }
        return string;
    };
})();