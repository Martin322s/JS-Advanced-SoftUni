function solve() {

  const inputText = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  const resultElement = document.getElementById('result');
  let result = '';

  if (convention === 'Camel Case') {
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === ' ') {
        result += (inputText[i + 1].toUpperCase());
        i++;
      } else {
        result += (inputText[i].toLowerCase());
      }
    }
  } else if (convention === 'Pascal Case') {
    result += inputText[0].toUpperCase();
    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === ' ') {
        result += (inputText[i + 1].toUpperCase());
        i++;
      } else {
        result += (inputText[i].toLowerCase());
      }
    }
  } else {
    result = 'Error!';
  }

  resultElement.textContent = result;
}