
const timer = document.getElementById('timer');
const container = document.querySelector('.container');

function getTime() {
    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

    if(h<=9) '0'+h;
    if(m<=9) '0'+m;
    if(s<=9) '0'+s;

    var color = '#'+h+m+s;

    timer.textContent = color;
    container.style.background = color;

    setTimeout(getTime, 1 *1000);
}

getTime();


