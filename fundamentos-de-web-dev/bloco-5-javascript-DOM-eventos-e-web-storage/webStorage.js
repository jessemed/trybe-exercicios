let changeBackgroundColor = document.querySelectorAll('#background-color>button');
for (let index = 0; index < changeBackgroundColor.length; index += 1) {
    changeBackgroundColor[index].addEventListener('click', function(event) {
        setBackgroundColor(event.target.innerHTML)
    });
}

window.onload = function () {

    function setBackgroundColor(color) {
        let content = document.querySelector('#main-content');
        if (color === black) {
            content.style.backgroundColor = color;
            content.style.color = 'white';
            localStorage.setItem('backgroundColor', color);
            localStorage.setItem('textColor', 'white');
        }
    }
}
