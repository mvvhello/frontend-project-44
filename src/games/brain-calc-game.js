import { playGame, getRandomInt } from "../../src/index.js";

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

// create gameDescription with describing of game task for askNameAndGreet() function
const gameDescription = `What is the result of the expression?`;

// Game's core logic
const brainCalcGame = () => {
  playGame(gameDescription, getRandomExpression, (expression) =>
    getResultOfExpression(expression)
  );
};

export default brainCalcGame;
