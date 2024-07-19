function secretChat(input) {
    let concealedMessage = input.shift();
    let command = input.shift();

    while (command !== 'Reveal') {
        let operation = command.split(':|:');
        
        switch(operation[0]) {
            case 'ChangeAll': {
                while (concealedMessage.includes(operation[1])) {
                    concealedMessage = concealedMessage.replace(operation[1], operation[2]);
                }

                console.log(concealedMessage);
            }
                break;
            case 'Reverse': {
                
            }
                break;
            case 'InsertSpace':
                break;
        }

        command = input.shift();
    }
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);