function colorize() {

    const tableRow = document.querySelectorAll('table tr');
    let tableRowArray = Array.from(tableRow);
    let tableRowLength = tableRowArray.length;
    let index = 0;

    for (let i = 0; i < tableRowLength; i++) {
        index++;
        if (index % 2 === 0) {
            tableRowArray[i].style.background = 'teal';
        }
    }
}