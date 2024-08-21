import { getRandomInt, playGame } from "../../src/index.js";

// Unique game's functions (creating conditions)
// Make progression row without gap
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

// MAIN FUNCTION: Making gameTask (formattedPregressionRawWithGap) function already with correctAnswer (randomGapIndexValue)
const makeGapInProgressionRow = () => {
  const progression = makeProgressionRow(); // generate progression row
  const randomGapIndex = getRandomInt(0, progression.length - 1); // random index within the progression
  const randomGapIndexValue = progression[randomGapIndex].toString(); // value at the index, converted as a string for further comparison
  const progressionRowWithGap = [...progression]; // clone the progression row
  progressionRowWithGap[randomGapIndex] = ".."; // replace the value at the randomGapIndex with ".."
  const formattedProgressionRawWithGap = progressionRowWithGap.join(" "); // convert array to string for further correct console output for gameTask

  return { formattedProgressionRawWithGap, randomGapIndexValue }; // return gameTask (progression with gap as a string) and missed value (e.g. correctAnswer)
};

// Parsing functions for makeGapInProgressionRow function to exctract the gameTask and correctAnswer for further playGame() function parameters
let correctAnswer;

const generateGameTask = () => {
  const { formattedProgressionRawWithGap, randomGapIndexValue } =
    makeGapInProgressionRow();

  correctAnswer = randomGapIndexValue;
  const gameTask = formattedProgressionRawWithGap;

  return gameTask;
};

const findCorrectAnswer = () => {
  return correctAnswer;
};

// create gameDescription with describing of game task for askNameAndGreet() function
const gameDescription = `What number is missing in the progression?`;

// Game's core logic
const brainProgressionGame = () => {
  playGame(gameDescription, generateGameTask, findCorrectAnswer);
};

export default brainProgressionGame;
