// game-characters.spec.js
const GameCharacters = require('../src/game-characters');
const path = require('path');

describe('GameCharacters', () => {
  let gameCharacters;

  beforeEach(() => {
    const scriptPath = path.join(__dirname, '../src/game-characters-data.js');
    gameCharacters = new GameCharacters(scriptPath);
  });

  test('should return data from the game-characters-data script', (done) => {
    gameCharacters.getCharacters((error, data) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { class: "Warrior", gender: "Male", special: "Wields a flaming sword" },
        { class: "Mage", gender: "Female", special: "Can summon lightning storms" },
        { class: "Rogue", gender: "Other", special: "Becomes invisible at will" }
      ]);
      done();
    });
  });

  test('should handle error when the script is not found', (done) => {
    const gameCharacters = new GameCharacters('non-existent-script.js');
    gameCharacters.getCharacters((error, data) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      done();
    });
  });
  
  test('should handle error when the script fails', (done) => {
    const failingScriptPath = path.join(__dirname, '../src/failing-script.js');
    const gameCharacters = new GameCharacters(failingScriptPath);
    gameCharacters.getCharacters((error, data) => {
      expect(data).toBeNull();
      expect(error).not.toBeNull();
      expect(error.message).toContain('An intentional error occurred');
      done();
    });
  });
  
});
