// const bgr = document.createElement("img");
// bgr.src = 'images/background.png';
// const mainWrapper = document.querySelector('.mainWrapper');
// mainWrapper.appendChild(bgr);

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const bgGame = new Image();
bgGame.src = 'images/background.png';

let tictimer = 15;
let points = 0;

let bgReady = false;
bgGame.onload = function () {
    bgReady = true;
}

let catObj = {};
catObj.x = 0;
catObj.y = 40;
catObj.width = 110;
catObj.height = 128;
catObj.speed = 10;

let catReady = false;
const catImg = new Image();
catImg.src = 'images/cat.png';
catImg.onload = function () {
    catReady = true;
}

let mouseObj = {};

mouseObj.width = 52;
mouseObj.height = 54;
mouseObj.x = Math.floor(Math.random() * 460);
mouseObj.y = Math.floor(Math.random() * 396);

let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = 'images/mouse.png';
mouseImg.onload = function () {
    mouseReady = true;
}


function render() {

    if (bgReady) { ctx.drawImage(bgGame, 0, 0); }
    if (catReady) { ctx.drawImage(catImg, catObj.x, catObj.y); }
    if (mouseReady) { ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y); }

    if (catObj.x > 500) { catObj.x = -100; }
    if (catObj.x < -110) { catObj.x = 500; }
    if (catObj.y > 500) { catObj.y = -120; }
    if (catObj.y < 40) { catObj.y = 41; }

    if ((catObj.x + catObj.width) > mouseObj.x &&
        (catObj.y + catObj.height) > mouseObj.y &&
        (catObj.x + 5) < (mouseObj.x + mouseObj.width) &&
        (catObj.y) < (mouseObj.y + mouseObj.height)) {
        mousePos();
        if (tictimer != 0) { points++; }

    }

    if (tictimer == 0) {
        mouseObj.x = 3000;

        if (points > 3) {
            ctx.fillStyle = "white";
            ctx.font = "30px Georgia";
            ctx.fillText("You WON ", 200, 220);
        }
        else {
            ctx.font = "30px Georgia";
            ctx.fillStyle = "Red";
            ctx.fillText("You LOSE ", 200, 220);
        }
    }

    ctx.font = "20px Georgia";
    ctx.fillStyle = "White";
    ctx.fillText("Points: " + points, 10, 25);
    ctx.fillText("Timer: " + tictimer, 400, 25);

}

function countdownTimer() {
    if (tictimer == 0) {
        timeUp = true;
        clearInterval(timerInterval);

    }
    else { tictimer--; }
}
function mousePos() {
    mouseObj.x = Math.floor(Math.random() * 460);
    mouseObj.y = Math.floor(Math.random() * 396);

}
addEventListener("keydown", function (e) {
    if (e.key == 'ArrowRight') { catObj.x += catObj.speed; }
    if (e.key == 'ArrowLeft') { catObj.x -= catObj.speed; }
    if (e.key == 'ArrowDown') { catObj.y += catObj.speed; }
    if (e.key == 'ArrowUp') { catObj.y -= catObj.speed; }
});


setInterval(render, 1);
const timerInterval = setInterval(countdownTimer, 1000);