#!/usr/bin/env node

import {
  GAME_ROUNDS,
  askNameAndGreet,
  getRandomInt,
  interactionWithUser,
  playGame,
} from "../../src/index.js";

// Unique game's functions (creating conditions)
// Find GCD function (Euclidean algorithm)
const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

// Game's core logic
const brainGcdGame = (userName) => {
  console.log(`Find the greatest common divisor of given numbers.`);

  let counter = 0;
  while (counter < GAME_ROUNDS) {
    // getting data for the game
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);
    const userInput = interactionWithUser(`${num1} ${num2}`);
    const userAnswer = isNaN(parseInt(userInput))
      ? userInput
      : parseInt(userInput);
    const correctAnswer = findGcd(num1, num2);

    counter = playGame(userAnswer, correctAnswer, userName, counter);
    if (counter === 0) {
      break;
    }
  }
};

// The game
const userName = askNameAndGreet();
brainGcdGame(userName);
