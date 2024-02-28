const canvas = document.querySelector("canvas");

const ctx = canvas && canvas.getContext("2d");


class PaintBrush {

  ctx: CanvasRenderingContext2D

  draw() { }

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.draw = this.draw.bind(this);
  }
}

class Box extends PaintBrush {

  private x: number;
  private y: number;
  private width: number;
  private height: number;

  constructor(x: number, y: number, width: number, height: number, ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(): void {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Building extends PaintBrush {

  ctx: CanvasRenderingContext2D

  boxes: Box[] = []

  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
    this.ctx = ctx;
    this.build = this.build.bind(this);
    this.animate = this.animate.bind(this);
  }

  build(box: Box, color: string = "blue") {
    console.log("Building the building...")
    this.ctx.fillStyle = color;
    box.draw();
  }

  buildBox(x: number, y: number, width: number, height: number, color: string = "blue") {
    this.ctx.fillStyle = color;
    this.boxes.push(new Box(x, y, width, height, this.ctx));
  }

  draw(): void {
    this.ctx.clearRect(0, 0, 400, 400);
  }

  animate() {
    this.draw();
    this.boxes.forEach(b => b.draw());
  }
}

(() => {
  if (!ctx) return;
  canvas.width = 400;
  canvas.height = 400;
  const building = new Building(ctx);

  building.buildBox(30, 40, 100, 200);
  building.buildBox(100, 200, 200, 100, "red");

  requestAnimationFrame(building.animate);
})()