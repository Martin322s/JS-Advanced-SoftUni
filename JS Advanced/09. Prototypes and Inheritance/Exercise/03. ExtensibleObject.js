function extensibleObject() {
    const proto = Object.getPrototypeOf(this);
    this.extend = function (obj) {
        for (const key in obj) {
            const value = obj[key]
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                this[key] = value;
            }
        }
    }
    return this;
}