class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = 50;
        this.height = 50;
        this.img = new Image(this.width, this.height);
        this.img.src = 'images/car.png';
        this.status = true;
    }

    draw() {
        if (this.status === true) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        }
    }

    moveLeft() {
        if (this.status === true) {
            this.x -= 25;
        }
    }

    moveRight() {
        if (this.status === true) {
            this.x += 25;
        }
    }

    checkCollisionCoin(coin) {
        if ((this.x + this.width > coin.x && this.y <= coin.y + coin.height) &&
            (this.x < coin.x + coin.width && this.y <= coin.y + coin.height)
        ) {
            coin.status = false;
            return false;
        }
    }

    checkCollisionBricks(brick) {
        if ((this.x + this.width > brick.x && this.y <= brick.y + brick.height) &&
            (this.x < brick.x + brick.width && this.y <= brick.y + brick.height)) {
            this.status = false;
            return false;
        }
    }
}
