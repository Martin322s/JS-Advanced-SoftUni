function validate() {

    const pattern = /[a-z]+@[a-z]+.[a-z]+/gm;
    let input = document.getElementById('email');

    input.addEventListener('change', (ev) => {
        if (pattern.test(ev.target.value)) {
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    });
}