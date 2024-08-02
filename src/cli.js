import readlineSync from "readline-sync";

const askNameAndGreet = () => {
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  return name; // return the name after printing for further usage
};

export default askNameAndGreet;
