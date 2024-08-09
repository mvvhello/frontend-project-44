#!/usr/bin/env node

import {
  GAME_ROUNDS,
  askNameAndGreet,
  interactionWithUser,
  playGame,
} from "../src/index.js";

// Unique game's functions (creating conditions)
// Function for generating random integer
const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

// Function for check if number is even or not
const isEven = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error(`Wrong input.The ${number} is not an integer`);
  }

  return number % 2 === 0;
};

// Game's core logic
const brainEvenGame = (userName) => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  let counter = 0;
  while (counter < GAME_ROUNDS) {
    // get data for the game
    const gameTask = getRandomInt(1, 11);
    const userAnswer = interactionWithUser(gameTask);
    const correctAnswer = isEven(gameTask) ? "yes" : "no";

    // play game (validate user's answer and then increment the counter OR break the cycle if the answer was wrong)
    counter = playGame(userAnswer, correctAnswer, userName, counter);
    if (counter === 0) {
      break;
    }
  }
};

const user = askNameAndGreet();
brainEvenGame(user);
