import { getRandomInt, playGame } from "../../src/index.js";

// Unique game's functions (creating conditions)
// Function to uderstand if the number is prime or not
const isPrime = (number) => {
  // check if the number is prime
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// create gameDescription with describing of game task for askNameAndGreet() function
const gameDescription = `Answer "yes" if given number is prime. Otherwise answer "no".`;

// Game's core logic
const brainPrimeGame = () => {
  playGame(
    gameDescription,
    () => getRandomInt(1, 31),
    (number) => (isPrime(number) ? "yes" : "no")
  );
};

export default brainPrimeGame;
