function Person(firstName, lastName) {
    let obj = {
        firstName,
        lastName,
        fullName: ""
    };

    Object.defineProperty(obj, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            let [first, last] = value.split(' ');
            if (first !== undefined && last !== undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        },
        configurable: true,
        enumerable: true
    });

    return obj;
}