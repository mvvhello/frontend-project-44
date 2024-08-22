import { getRandomInt, playGame } from '../index.js';

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

// MAIN FUNCTION: Make gameTask with correctAnswer
const makeGapInProgressionRow = () => {
  const progression = makeProgressionRow();
  const randomGapIndex = getRandomInt(0, progression.length - 1);

  // value at the index, converted as a string for further comparison
  const randomGapIndexValue = progression[randomGapIndex].toString();
  const progressionRowWithGap = [...progression];

  progressionRowWithGap[randomGapIndex] = '..';
  const formattedProgressionRawWithGap = progressionRowWithGap.join(' ');

  // return gameTask (progression with gap as a string) and missed value (e.g. correctAnswer)
  return { formattedProgressionRawWithGap, randomGapIndexValue };
};

// Parsing functions
let correctAnswer;

const generateGameTask = () => {
  const { formattedProgressionRawWithGap, randomGapIndexValue } = makeGapInProgressionRow();

  correctAnswer = randomGapIndexValue;
  const gameTask = formattedProgressionRawWithGap;

  return gameTask;
};

const findCorrectAnswer = () => correctAnswer;

// create gameDescription with describing of game task for askNameAndGreet() function
const gameDescription = 'What number is missing in the progression?';

// Game's core logic
const brainProgressionGame = () => {
  playGame(gameDescription, generateGameTask, findCorrectAnswer);
};

export default brainProgressionGame;
