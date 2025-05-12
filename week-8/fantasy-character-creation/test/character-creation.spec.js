"use strict";

const fs = require("fs").promises;
const path = require("path");
const FILE_PATH = path.join(__dirname, "../src/characters.json");
const { createCharacter, getCharacters } = require("../src/character-creation");

beforeEach(async () => {
  await fs.writeFile(FILE_PATH, "[]"); // Reset the file before each test
});

afterEach(async () => {
  await fs.writeFile(FILE_PATH, "[]"); // Clean up after each test
});

describe("Character Creation Module", () => {
  test("should write a new character to the file", async () => {
    const character = {
      class: "Mage",
      gender: "Female",
      special: "Can summon lightning"
    };

    await createCharacter(character);
    const data = await fs.readFile(FILE_PATH, "utf8");
    const characters = JSON.parse(data);
    expect(characters).toContainEqual(character);
  });

  test("should read characters from the file", async () => {
    const character = {
      class: "Warrior",
      gender: "Male",
      special: "An iron bender"
    };

    await fs.writeFile(FILE_PATH, JSON.stringify([character], null, 2));
    const characters = await getCharacters();
    expect(characters).toContainEqual(character);
  });

  test("should handle error when reading a corrupted file", async () => {
    await fs.writeFile(FILE_PATH, "invalid json");
    await expect(getCharacters()).rejects.toThrow("Failed to read characters");
  });
});
