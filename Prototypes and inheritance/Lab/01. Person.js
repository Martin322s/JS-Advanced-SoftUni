function Person(firstName, lastName) {

    let person = {
        firstName,
        lastName,
        fullName: ''
    };

    Object.defineProperty(person, 'fullName', {
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

    return person;
}

let person1 = new Person("Peter", "Ivanov");
console.log(person1.fullName); //Peter Ivanov
person1.firstName = "George";
console.log(person1.fullName); //George Ivanov
person1.lastName = "Peterson";
console.log(person1.fullName); //George Peterson
person1.fullName = "Nikola Tesla";
console.log(person1.firstName); //Nikola
console.log(person1.lastName); //Tesla

let person2 = new Person("Albert", "Simpson");
console.log(person2.fullName); //Albert Simpson
person2.firstName = "Simon";
console.log(person2.fullName); //Simon Simpson
person2.fullName = "Peter";
console.log(person2.firstName); // Simon
console.log(person2.lastName);