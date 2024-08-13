#!/usr/bin/env node

import {
  GAME_ROUNDS,
  askNameAndGreet,
  getRandomInt,
  interactionWithUser,
  playGame,
} from "../../src/index.js";

// Unique game's functions (creating conditions)
const makeProgressionRow = () => {
  const commonDifference = getRandomInt(1, 7);
  const firstNumber = getRandomInt(1, 10);
  const progressionRow = [firstNumber];
  for (let i = 0; i < 9; i += 1) {
    const lastNumber = progressionRow[i];
    progressionRow.push(lastNumber + commonDifference);
  }

  return progressionRow;
};

// Making gameTask (progressionWithRow) and exctract the correctAnswer (randomGapIndexValue) for brainProgressionGame()
const makeGapInProgressionRow = (progression) => {
  const randomGapIndex = getRandomInt(0, 10);
  const randomGapIndexValue = progression[randomGapIndex];
  const progressionRowWithGap = [...progression];
  progressionRowWithGap[randomGapIndex] = "..";
  const formattedProgressionRawWithGap = progressionWithRow.join(" ");

  return { formattedProgressionRawWithGap, randomGapIndexValue };
};

// Game's core logic
const brainProgressionGame = (userName) => {
  console.log(`What number is missing in the progression?`);

  let counter = 0;
  while (counter < GAME_ROUNDS) {
    // getting data for the game
    const progressionRow = makeProgressionRow();
    const {
      formattedProgressionRawWithGap: gameTask,
      randomGapIndexValue: correctAnswer,
    } = makeGapInProgressionRow(progressionRow);
    const userInput = interactionWithUser(gameTask);
    const userAnswer = isNaN(parseInt(userInput))
      ? userInput
      : parseInt(userInput);

    counter = playGame(userAnswer, correctAnswer, userName, counter);
    if (counter === 0) {
      break;
    }
  }
};

// The game
const userName = askNameAndGreet();
brainProgressionGame(userName);
