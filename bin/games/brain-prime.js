#!/usr/bin/env node

import {
  GAME_ROUNDS,
  askNameAndGreet,
  getRandomInt,
  interactionWithUser,
  playGame,
} from "../../src/index.js";

// Unique game's functions (creating conditions)
// Function to uderstand if the number is prime or not
const isPrime = (number) => {
  // edge cases
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  // check if the number is prime
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// Game's core logic
const brainPrimeGame = (userName) => {
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);

  let counter = 0;
  while (counter < GAME_ROUNDS) {
    // get data for the game
    const gameTask = getRandomInt(0, 100);
    const userAnswer = interactionWithUser(gameTask);
    const correctAnswer = isPrime(gameTask) ? "yes" : "no";

    // play game (validate user's answer and then increment the counter OR break the cycle if the answer was wrong)
    counter = playGame(userAnswer, correctAnswer, userName, counter);
    if (counter === 0) {
      break;
    }
  }
};

// The game
const userName = askNameAndGreet();
brainPrimeGame(userName);
