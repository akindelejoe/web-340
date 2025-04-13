/**
 * Author: Joe Akindele
 * Date: April 2025
 * File Name: index.js
 * Description: Main entry point for the Taco Stand application.
 */

"use strict";
const readline = require("readline");
const TacoStandEmitter = require('./taco-stand.js');



const tacoStand = new TacoStandEmitter();

// Set up event listeners
tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);

// Handle the commands
rl.on("line", (input) => {
  const [command, ...args] = input.trim().split(" ");
  const argument = args.join(" ");

  switch (command.toLowerCase()) {
    case "serve":
      tacoStand.serveCustomer(argument);
      break;
    case "prepare":
      tacoStand.prepareTaco(argument);
      break;
    case "rush":
      tacoStand.handleRush(argument);
      break;
    default:
      console.log(`Unknown command: ${command}. Please use "serve", "prepare", or "rush".`);
  }
});
