function secretChat(input) {
    let concealedMessage = input.shift();
    let command = input.shift();

    while (command !== 'Reveal') {
        let operation = command.split(':|:');

        switch (operation[0]) {
            case 'ChangeAll': {
                while (concealedMessage.includes(operation[1])) {
                    concealedMessage = concealedMessage.replace(operation[1], operation[2]);
                }

                console.log(concealedMessage);
            }
                break;
            case 'Reverse': {
                if (concealedMessage.includes(operation[1])) {
                    let index = concealedMessage.indexOf(operation[1]);
                    let firstPart = concealedMessage.substring(0, index);
                    let secondPart = concealedMessage.substring(firstPart.length + operation[1].length);
                    concealedMessage = firstPart + secondPart + operation[1]
                        .split('')
                        .reverse()
                        .join('');

                    console.log(concealedMessage);
                } else {
                    console.log('error');
                }
            }
                break;
            
        }

        command = input.shift();
    }

    console.log(`You have a new text message: ${concealedMessage}`);
}