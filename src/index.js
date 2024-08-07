import readlineSync from "readline-sync";

const askNameAndGreet = () => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name; // return the name after printing for further usage
};

const validateUserAnswer = (userAnswer, correctAnswer, userName) => {
  if (userAnswer === correctAnswer) {
    return { isValid: true, message: `Correct!` };
  } else {
    return {
      isValid: false,
      message: `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}!`,
    };
  }
};

export default askNameAndGreet;
