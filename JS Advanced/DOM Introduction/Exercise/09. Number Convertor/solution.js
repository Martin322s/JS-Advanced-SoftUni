function solve() {

    let input = document.getElementById('input');
    let result = document.getElementById('result');
    let selectMenu = document.getElementById('selectMenuTo');
    let optionBinary = document.createElement('option');

    optionBinary.value = 'binary';
    optionBinary.innerHTML = 'Binary';

    let optionHexadecimal = document.createElement('option');
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.innerHTML = 'Hexadecimal';

    selectMenu.appendChild(optionBinary);
    selectMenu.appendChild(optionHexadecimal);

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', calculate);

    function calculate() {

        if (selectMenu.value === 'binary') {
            result.value = Number(input.value).toString(2);
        } else if (selectMenu.value === 'hexadecimal') {
            result.value = Number(input.value).toString(16).toUpperCase();
        }
    }
}