// game-characters.js

const { spawn } = require('child_process');
const path = require('path');

class GameCharacters {
  constructor(scriptPath) {
    this.scriptPath = path.join(__dirname, path.basename(scriptPath));
  }

  getCharacters(callback) {
    const child = spawn('node', [this.scriptPath], {
      env: { ...process.env, NODE_OPTIONS: '' } 
    });
    
    let data = '';
    let errorData = '';

    child.stdout.on('data', (chunk) => {
      data += chunk;
    });

    child.stderr.on('data', (chunk) => {
      errorData += chunk;
    });

    child.on('close', (code) => {
      if (code !== 0 || errorData) {
        return callback(new Error(errorData.trim()), null);
      }

      try {
        const parsed = JSON.parse(data);
        callback(null, parsed);
      } catch (err) {
        callback(err, null);
      }
    });
  }
}

module.exports = GameCharacters;
