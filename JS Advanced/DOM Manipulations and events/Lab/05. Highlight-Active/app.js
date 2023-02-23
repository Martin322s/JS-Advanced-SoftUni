function focused() {

    const mainDiv = document.getElementsByTagName('div')[0];
    let inputElement = mainDiv.getElementsByTagName('input');
    let divArray = Array.from(inputElement);

    divArray.forEach(element => {
        element.addEventListener('focus', focus);
    });

    divArray.forEach(element => {
        element.addEventListener('blur', focusLost);
    })

    function focus(e) {
        let parent = e.target.parentNode;
        parent.classList.add("focused");
    }

    function focusLost(e) {
        let parent = e.target.parentNode;
        parent.classList.remove('focused');
    }
}