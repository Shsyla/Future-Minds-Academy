// const bgr = document.createElement("img");
// bgr.src = 'images/background.png';
// const mainWrapper = document.querySelector('.mainWrapper');
// mainWrapper.appendChild(bgr);

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const bgGame = new Image();
bgGame.src = 'images/background.png';

let tictimer = 15;
// let timeUp = false;

let bgReady = false;
bgGame.onload = function () {
    bgReady = true;
}

let catObj = {};
catObj.x = 0;
catObj.y = 40;
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
mouseObj.y = Math.floor(Math.random() * 426);

let mouseReady = false;
const mouseImg = new Image();
mouseImg.src = 'images/mouse.png';
mouseImg.onload = function () {
    mouseReady = true;
}

// mouseImg.onload = function () {
//     if (mouseObj.x < 0) {
//         ctx.drawImage(mouseImg, 0, mouseObj.y);
//     }
//     else {
//         ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);
//     }
//     if (mouseObj.y < 0) {
//         ctx.drawImage(mouseImg, mouseObj.x, 0);
//     }
//     else {
//         ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y);
//     }
// }


function render() {
    // if (!timeUp) {
    if (bgReady) { ctx.drawImage(bgGame, 0, 0); }
    if (catReady) { ctx.drawImage(catImg, catObj.x, catObj.y); }
    if (mouseReady) { ctx.drawImage(mouseImg, mouseObj.x, mouseObj.y); }
    if (catObj.x > 500) { catObj.x = -100; }
    if (catObj.x < -110) { catObj.x = 500; }
    if (catObj.y > 500) { catObj.y = -120; }
    if (catObj.y < 40) { catObj.y = 41; }

    ctx.font = "20px Georgia";
    ctx.fillStyle = "White";
    ctx.fillText("Points: 0", 10, 25);

    ctx.fillText("Timer: " + tictimer, 400, 25);

    if (tictimer == 0) {
        timeUp = true;
        clearInterval(timerInterval);
        // console.log("Time's up!");
    }
    // } else {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     ctx.font = "30px Georgia";
    //     ctx.fillStyle = "red";
    //     ctx.fillText("Time's up!", 200, 200);
    // }
}

function countdownTimer() {
    tictimer--;
}

addEventListener("keydown", function (e) {
    if (e.key == 'ArrowRight') { catObj.x += catObj.speed; }
    if (e.key == 'ArrowLeft') { catObj.x -= catObj.speed; }
    if (e.key == 'ArrowDown') { catObj.y += catObj.speed; }
    if (e.key == 'ArrowUp') { catObj.y -= catObj.speed; }
});


setInterval(render, 1);

const timerInterval = setInterval(countdownTimer, 1000);