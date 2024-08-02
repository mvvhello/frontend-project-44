#!/usr/bin/env node

import askNameAndGreet from "../src/cli.js";
import brainEvenGame from "./brain-even.js";

console.log("Welcome to the Brain Games");
const user = askNameAndGreet();
brainEvenGame(user);
