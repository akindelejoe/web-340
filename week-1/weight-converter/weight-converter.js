/**
 * Author: Joe Akindele
 * Date: 22-March-2025
 * File Name: Weight-Converter
 * Description: A Node.js script that converts pounds to kilograms using command-line input.
*/

"use strict";

// TODO: Implement the weight conversion logic here

// Check if a command-line argument is provided
if (process.argv.length !== 3) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1);
}

const pounds = process.argv[2];

// Check if the input is a valid number
if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

// Convert pounds to kilograms
const kilograms = (pounds * 0.453592).toFixed(2);

// Print the result
console.log(kilograms);

