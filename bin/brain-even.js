import readlineSync from "readline-sync";

// Function for generating random integer
const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

// Function for check if number is even or not
const isEven = (number) => {
  // Check if the input value is an integer
  if (!Number.isInteger(number)) {
    throw new Error(`Wrong input.The ${number} is not an integer`);
  }

  // will return true if === 0, otherwise will return false
  return number % 2 === 0;
};

// Function to check if user's answer is correct
const isAnswerCorrect = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    return { isValid: true, message: `Correct!` };
  } else {
    return {
      isValid: false,
      message: `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}!`,
    };
  }
};

// Game logic
const brainEvenGame = (userName) => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  let counter = 0;
  while (counter < 3) {
    // get data for the game
    const randomNumber = getRandomInt(1, 11);
    const correctAnswer = isEven(randomNumber) ? "yes" : "no";

    // interaction with the user
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question(`Your answer: `).toLowerCase();

    // validate user's answer
    const { isValid, message } = isAnswerCorrect(
      userAnswer,
      correctAnswer,
      userName
    );

    // validating user's answer
    if (isValid) {
      counter += 1;
      console.log(message);
      if (counter === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(message);
      break;
    }
  }
};

export default brainEvenGame;
