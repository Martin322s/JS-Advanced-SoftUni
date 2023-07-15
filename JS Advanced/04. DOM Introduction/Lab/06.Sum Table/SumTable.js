function sumTable() {
    let tableData = Array.from(document.querySelectorAll('tr td:nth-of-type(2n)'));
    let sum = tableData.pop();

    sum.textContent = tableData.reduce((a, x) => {
        return a + Number(x.textContent);
    }, 0);
}