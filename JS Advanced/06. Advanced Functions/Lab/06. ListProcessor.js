function listProcessor(input) {
    let result = [];

    let operations = () => ({
        add: (string) => {
            result.push(string);
        },
        remove: (string) => {
            result = result.filter(x => x !== string);
        },
        print: () => console.log(result.join())
    });

    for (let operation of input) {
        let [action, value] = operation.split(' ');

        switch (action) {
            case "add": operations().add(value);
                break;
            case "remove": operations().remove(value);
                break;
            case "print": operations().print();
        }
    }
}