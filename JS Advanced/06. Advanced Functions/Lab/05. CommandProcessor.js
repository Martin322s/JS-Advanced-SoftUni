function commandProcessor() {
    let string = '';

    return {
        append: (str) => {
            string += str;
        },
        removeStart: (num) => {
            string = string.split('').slice(num).join('');
        },
        removeEnd: (num) => {
            string = string
                .split('')
                .reverse()
                .slice(num)
                .reverse()
                .join('')
        },
        print: () => console.log(string)
    }
}

let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
