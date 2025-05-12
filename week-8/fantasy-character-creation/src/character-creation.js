"use strict";

const fs = require("fs").promises;
const path = require("path");

const FILE_PATH = path.join(__dirname, "characters.json");

async function createCharacter(character) {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    const characters = JSON.parse(data);
    characters.push(character);
    await fs.writeFile(FILE_PATH, JSON.stringify(characters, null, 2));
  } catch (error) {
    throw new Error("Failed to write character");
  }
}

async function getCharacters() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to read characters");
  }
}

module.exports = { createCharacter, getCharacters };
