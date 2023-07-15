function extractText() {
    let listItems = Array.from(document.querySelectorAll("#items li"));
    let result = document.getElementById('result');
    
    result.textContent = listItems.map(x => x.textContent).join('\n');
}