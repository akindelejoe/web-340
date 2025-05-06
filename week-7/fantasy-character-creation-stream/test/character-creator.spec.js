const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    const characterData = {
      class: 'Warrior',
      gender: 'Male',
      funFact: 'Can read minds'
    };

    characterCreator.write(JSON.stringify(characterData), () => {
      const result = characterCreator.read().toString();
      expect(result.trim()).toBe('A brave Male Warrior who Can read minds.');
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on('error', (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Invalid JSON');
      done();
    });

    characterCreator.write("not a valid json");
  });

  test("should emit 'error' when incomplete data is written", (done) => {
    const badData = {
      class: 'Mage'
    };

    characterCreator.on('error', (err) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe('Invalid character data');
      done();
    });

    characterCreator.write(JSON.stringify(badData));
  });

});
