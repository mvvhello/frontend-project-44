import readlineSync from "readline-sync";

const GAME_ROUNDS = 3;

// Greeting the user and get his name for further functions
const askNameAndGreet = () => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  return name; // return the name after printing for further usage
};

// Getting random integer
const getRandomInt = (min, max) => {
  // validate inputs
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Both min and max must be numbers.");
  }
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error("Both min and max must be integers.");
  }
  if (min >= max) {
    throw new Error("min must be less than max.");
  }

  // find and return randon integer
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

// Getting user's answer for further functions
const interactionWithUser = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question(`Your answer: `).toLowerCase();

  return userAnswer;
};

// Compare user's answer and correct answer and return data for playGame() function
const validateUserAnswer = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    return { isValid: true, message: `Correct!`, point: 1 };
  } else {
    return {
      isValid: false,
      message: `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`,
      point: 0,
    };
  }
};

// Validate user's answer and if it is correct - increment counter, otherwise - counter will be equal to 0, which will stop the game.
// With messages accompanying the game
const playGame = (userAnswer, correctAnswer, userName, counter) => {
  const { isValid, message, point } = validateUserAnswer(
    userAnswer,
    correctAnswer,
    userName
  );

  if (isValid) {
    counter += point;
    console.log(message);
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(message);
    counter = 0;
  }

  return counter;
};

export {
  GAME_ROUNDS,
  askNameAndGreet,
  getRandomInt,
  interactionWithUser,
  playGame,
};
