function validate() {

    const pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
    let email = document.querySelector('#email');
    email.addEventListener("change", (ev) => {
        const className = pattern.test(ev.target.value) ? "" : "error";
        ev.target.className = className;
    });
}