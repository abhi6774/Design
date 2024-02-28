"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas && canvas.getContext("2d");
class PaintBrush {
    constructor(ctx) {
        this.ctx = ctx;
        this.draw = this.draw.bind(this);
    }
    draw() { }
}
class Box extends PaintBrush {
    constructor(x, y, width, height, ctx) {
        super(ctx);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw() {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
class Building extends PaintBrush {
    constructor(ctx) {
        super(ctx);
        this.boxes = [];
        this.ctx = ctx;
        this.build = this.build.bind(this);
        this.animate = this.animate.bind(this);
    }
    build(box, color = "blue") {
        console.log("Building the building...");
        this.ctx.fillStyle = color;
        box.draw();
    }
    buildBox(x, y, width, height, color = "blue") {
        this.ctx.fillStyle = color;
        this.boxes.push(new Box(x, y, width, height, this.ctx));
    }
    draw() {
        this.ctx.clearRect(0, 0, 400, 400);
    }
    animate() {
        this.draw();
        this.boxes.forEach(b => b.draw());
    }
}
(() => {
    if (!ctx)
        return;
    canvas.width = 400;
    canvas.height = 400;
    const building = new Building(ctx);
    building.buildBox(30, 40, 100, 200);
    building.buildBox(100, 200, 200, 100, "red");
    requestAnimationFrame(building.animate);
})();
