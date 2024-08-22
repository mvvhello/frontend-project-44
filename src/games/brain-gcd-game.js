import { getRandomInt, playGame } from "../../src/index.js";

// Unique game's functions (creating conditions)
// Find GCD function (Euclidean algorithm) aka findCorrectAnswerFunction for playGame function
const findCorrectAnswer = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findCorrectAnswer(b, a % b);
};

// Create and return 2 numbers aka generateGameTaskFunction for playGame function
const generateGameTask = () => {
  const num1 = getRandomInt(1, 21);
  const num2 = getRandomInt(1, 21);

  const gameTask = `${num1} ${num2}`;

  return gameTask;
};

// create gameDescription with describing of game task for askNameAndGreet() function
const gameDescription = `Find the greatest common divisor of given numbers.`;

// Game's core logic
const brainGcdGame = () => {
  playGame(gameDescription, generateGameTask, (gameTask) => {
    const [a, b] = gameTask.split(" ").map(Number);
    return findCorrectAnswer(a, b);
  });
};

export default brainGcdGame;
