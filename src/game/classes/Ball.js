import { gravity, verticalFriction, horizontalFriction } from "../constants";
import { pad, unpad } from "../padding";
import { Obstacle, Sink } from "./Obstacle";

export class Ball {
  constructor(x, y, radius, color, ctx, obstacles, sinks, onFinish) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
    this.ctx = ctx;
    this.obstacles = obstacles;
    this.sinks = sinks;
    this.onFinish = onFinish;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(unpad(this.x), unpad(this.y), this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
  }

  update() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;

    this.obstacles.forEach((obstacle) => {
      const d = Math.hypot(this.x - obstacle.x, this.y - obstacle.y);
      if (d < pad(this.radius + obstacle.radius)) {
        const angle = Math.atan2(this.y - obstacle.y, this.x - obstacle.x);

        const speed = Math.sqrt(this.vx ** 2 + this.vy ** 2);
        this.vx = speed * Math.cos(angle) * horizontalFriction;
        this.vy = speed * Math.sin(angle) * verticalFriction;

        const overlap = this.radius + obstacle.radius - unpad(d);
        this.x += pad(overlap * Math.cos(angle));
        this.y += pad(overlap * Math.sin(angle));
      }
    });

    this.sinks.forEach((sink) => {
      if (
        unpad(this.x) > sink.x - sink.width / 2 &&
        unpad(this.x) < sink.x + sink.width / 2 &&
        unpad(this.y) + this.radius > sink.y - sink.height / 2
      ) {
        this.vx = 0;
        this.vy = 0;
        this.onFinish(sink);
      }
    });
  }
}
