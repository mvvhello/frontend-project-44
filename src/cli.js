import readlineSync from "readline-sync";

const askNameAndGreet = () => {
  console.log(`Welcome to the Brain Games!`);
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name; // return the name after printing for further usage
};

export default askNameAndGreet;
