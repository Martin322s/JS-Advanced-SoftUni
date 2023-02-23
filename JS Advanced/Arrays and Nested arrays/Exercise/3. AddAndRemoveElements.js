function addAndRemove(commands) {

    let resultArray = [];

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];

        if (currentCommand === 'add') {
            resultArray.push(i + 1);
        } else if (currentCommand === 'remove') {
            resultArray.pop();
        }
    }

    if (resultArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArray.join('\n'));
    }
}
addAndRemove(['remove', 'remove', 'remove']);