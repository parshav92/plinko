import {
  WIDTH,
  HEIGHT,
  obstacleRadius,
  sinkWidth,
  NUM_SINKS,
} from "./constants";
import { pad } from "./padding";

const MULTIPLIERS = {
  0: 16,
  1: 9,
  2: 2,
  3: 1.4,
  4: 1.4,
  5: 1.2,
  6: 1.1,
  7: 1,
  8: 0.5,
  9: 1,
  10: 1.1,
  11: 1.2,
  12: 1.4,
  13: 1.4,
  14: 2,
  15: 9,
  16: 16,
};

export function createObstacles() {
  const obstacles = [];
  const rows = 18;
  for (let row = 2; row < rows; row++) {
    const numObstacles = row + 1;
    const y = 0 + row * 35;
    const spacing = 36;
    for (let col = 0; col < numObstacles; col++) {
      const x = WIDTH / 2 - spacing * (row / 2 - col);
      obstacles.push({ x: pad(x), y: pad(y), radius: obstacleRadius });
    }
  }
  return obstacles;
}

export function createSinks() {
  const sinks = [];
  const SPACING = obstacleRadius * 2;

  for (let i = 0; i < NUM_SINKS; i++) {
    const x =
      WIDTH / 2 + sinkWidth * (i - Math.floor(NUM_SINKS / 2)) - SPACING * 1.5;
    const y = HEIGHT - 170;
    const width = sinkWidth;
    const height = width;
    sinks.push({ x, y, width, height, multiplier: MULTIPLIERS[i + 1] });
  }
  return sinks;
}
