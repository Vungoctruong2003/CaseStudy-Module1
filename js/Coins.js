class Coins {
    constructor() {
        this.x = Math.floor(Math.random() * 450);
        this.y = 100;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = 60;
        this.height = 60;
        this.status = true;
        this.img = new Image(this.width, this.height);
        this.img.src = 'images/Coins.png';
        this.speech = 15
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    moveDown() {
        this.y += this.speech;
    }
}
