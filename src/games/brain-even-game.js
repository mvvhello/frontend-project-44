import { getRandomInt, playGame } from '../index.js';

// Unique game's functions (creating conditions)

// Function for check if number is even or not
const isEven = (number) => {
  if (!Number.isInteger(number)) {
    throw new Error(`Wrong input.The ${number} is not an integer`);
  }

  return number % 2 === 0;
};

// create gameDescription with describing of game task for askNameAndGreet() function
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

// Game's core logic
const brainEvenGame = () => {
  playGame(
    gameDescription,
    () => getRandomInt(1, 11),
    (number) => (isEven(number) ? 'yes' : 'no'),
  );
};

export default brainEvenGame;
