class Parser {

    parseJsonFile(filename){
        const fs = require('fs');
        let rawdata = fs.readFileSync(filename);
        return JSON.parse(rawdata);
      }
    }

module.exports = new Parser();