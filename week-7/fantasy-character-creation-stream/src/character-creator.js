const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    this.character = {}; 
  }

  _write(chunk, encoding, callback) {
    try {
      const data = JSON.parse(chunk.toString());
      if (data.class && data.gender && data.funFact) {
        this.character = data;
        callback();
      } else {
        callback(new Error('Invalid character data'));
      }
    } catch (err) {
      callback(new Error('Invalid JSON'));
    }
  }

  _read(size) {
    if (Object.keys(this.character).length > 0) {
      const { class: characterClass, gender, funFact } = this.character;
      const output = `A brave ${gender} ${characterClass} who ${funFact}.\n`;
      this.push(output);
      this.push(null);
    } else {
      this.push(null);
    }
  }
}  

module.exports = CharacterCreator;
