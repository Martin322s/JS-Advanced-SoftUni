function sumTable() {

    const table = document.querySelectorAll('table tr');
    let total = 0;

    for (let i = 1; i < table.length; i++) {
        let col = table[i].children;
        let cost = col[col.length - 1].textContent;
        total += Number(cost);
    }

    const sumElement = document.getElementById('sum');
    sumElement.textContent = total;
}