class Road {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.width = 500;
        this.height = 500;
        this.img = new Image(this.width, this.height);
        this.img.src = 'images/background.jpg';
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}
