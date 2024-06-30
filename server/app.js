const express = require("express");
const cors = require("cors");
const outcomes = require("./outcomes.js");

const app = express();
app.use(cors());

const total_drops = 16;

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

app.post("/api/game", (req, res) => {
  let outcome = 0;
  let pattern = [];

  for (let i = 0; i < total_drops; i++) {
    if (Math.random() > 0.5) {
      pattern.push("R");
      outcome++;
    } else {
      pattern.push("L");
    }
  }

  const multiplier = MULTIPLIERS[outcome];
  const possibleOutcomes = outcomes[outcome];

  res.send({
    point:
      possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)],
    multiplier,
    pattern,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
