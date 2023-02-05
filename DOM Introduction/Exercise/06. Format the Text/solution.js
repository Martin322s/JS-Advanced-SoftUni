function solve() {

  const text = document.getElementById('input').value;
  const textArray = text.split('.').filter(s => s !== '');
  const output = document.getElementById('output');

  while (textArray.length > 0) {
    let sentance = textArray.splice(0, 3).join('. ');
    let paragraph = document.createElement('p');
    paragraph.textContent = sentance;
    output.appendChild(paragraph);
  }
}