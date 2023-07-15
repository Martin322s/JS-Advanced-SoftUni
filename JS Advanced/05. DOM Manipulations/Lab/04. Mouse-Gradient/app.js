function attachGradientEvents() {

    const gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', move);

    function move(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        let result = document.getElementById('result');
        result.textContent = power + '%';
    }
}