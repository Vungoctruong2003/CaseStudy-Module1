let canvas = document.getElementById('my-canvas');
let ctx = canvas.getContext('2d');
let car = new Car(260, 440);
let brick = new Brick();
let brick1 = new Brick();
let brick2 = new Brick();
let road = new Road(0, 0);
let countPoint = 0;
let coins = new Coins();

function playGame() {
    clearGreen();
    road.draw();
    car.draw();
    brick.draw();
    brick.moveDown();
    brick1.draw();
    brick1.moveDown();
    brick2.draw();
    brick2.moveDown();
    coins.draw();
    coins.moveDown();

    if (car.status === true) {
        if (car.checkCollisionCoin(coins) === false) {
            countPoint++;
            document.getElementById("showPoint").innerHTML = "Your Point :" + countPoint;
            coins = new Coins();
            document.getElementById("point").play();
        }
    }
    if (car.checkCollisionBricks(brick) === false || car.checkCollisionBricks(brick1) === false || car.checkCollisionBricks(brick2) === false) {
        checkGameOver();
    }

    if (car.status === true) {
        if (brick.y >= 500) {
            brick = new Brick();
        }
        if (brick1.y >= 500) {
            brick1 = new Brick();
        }
        if (brick2.y >= 500) {
            brick2 = new Brick();
        }

    }

    if (car.status === true) {
        if (coins.y >= 500) {
            coins = new Coins();
        }
    }

    if(countPoint >= 5){
        coins.speech = 20;
        brick.speech = 18;
        brick1.speech = 20;
        brick2.speech = 25;
    }
    if(countPoint >= 10){
        coins.speech = 30;
        brick.speech = 36;
        brick2.speech = 38;
        brick1.speech = 43;
    }

}

setInterval(playGame, 200)



window.addEventListener('keyup', function (event) {
        let key = event.keyCode;
        switch (key) {
            case 37:
                car.moveLeft();
                break;
            case 39:
                car.moveRight();
                break;
        }
    }
)

function clearGreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function checkGameOver() {
    if (car.status === false) {
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER!!!", canvas.width / 2, canvas.height / 2);
        document.getElementById("endgame").play();
    }
}
function playSoundBackground() {
    if (car.status === true) {
        document.getElementById("background_audio").play();
    }
}
setInterval(playSoundBackground, 3000)

