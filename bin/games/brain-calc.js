#!/usr/bin/env node

import {
  GAME_ROUNDS,
  askNameAndGreet,
  getRandomInt,
  interactionWithUser,
  playGame,
} from "../../src/index.js";

// Unique game's functions (creating conditions)
// Getting random expression
const getRandomExpression = () => {
  const operators = ["+", "-", "*"];
  const randomOperator = operators[getRandomInt(0, 3)];
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  return `${num1} ${randomOperator} ${num2}`;
};

// Getting the correct answer for the game's task
const getResultOfExpression = (expression) => {
  // parsing the expression
  const [num1, operator, num2] = expression.split(" ");
  const number1 = parseInt(num1);
  const number2 = parseInt(num2);

  // calculating result
  let result;
  switch (operator) {
    case "+":
      result = number1 + number2;
      return result;
    case "-":
      result = number1 - number2;
      return result;
    case "*":
      result = number1 * number2;
      return result;
    default:
      throw new Error(
        `Some problems with getResultOfExpression in: ${number1} or ${number2} or ${operator}`
      );
  }
};

// Game's core logic
const brainCalcGame = (userName) => {
  console.log(`What is the result of the expression?`);

  let counter = 0;
  while (counter < GAME_ROUNDS) {
    // get data for the game
    const gameTask = getRandomExpression();
    const userAnswer = parseInt(interactionWithUser(gameTask));
    const correctAnswer = getResultOfExpression(gameTask);

    // play game (validate user's answer and then increment the counter OR break the cycle if the answer was wrong)
    counter = playGame(userAnswer, correctAnswer, userName, counter);
    if (counter === 0) {
      break;
    }
  }
};

// The game
const userName = askNameAndGreet();
brainCalcGame(userName);
