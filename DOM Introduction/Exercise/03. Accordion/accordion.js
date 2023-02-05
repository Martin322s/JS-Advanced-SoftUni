function toggle() {

    const button = document.querySelector('.button');
    const paragraph = document.getElementById('extra');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        paragraph.style.display = 'block';
    } else {
        button.textContent = 'More';
        paragraph.style.display = 'none';
    }
}