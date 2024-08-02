import readlineSync from "readline-sync";

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

const isEven = (number) => {
  // Check if the input value is an integer
  if (!Number.isInteger(number)) {
    throw new Error(`Wrong input.The ${number} is not an integer`);
  }

  // will return true if === 0, otherwise will return false
  return number % 2 === 0;
};

const brainEvenGame = () => {
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  let counter = 0;
  while (counter <= 3) {
    // get data for the game
    const randomNumber = getRandomInt(1, 10);
    const correctAnswer = isEven(randomNumber) ? "yes" : "no";

    // interaction with the user
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question(`Your answer: `);

    // validating user's answer
    if (userAnswer === correctAnswer) {
      counter += 1;
    } else {
      if (userAnswer === "yes") {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.`);
      } else if (userAnswer === "no") {
        console.log(`'no is wrong answer ;(. Correct answer was 'yes'.`);
      }
    }
  }
};
