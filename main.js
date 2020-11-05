const translateWord = require('./translate-word.js');
const encodeWord = require('./encode-word.js');


const command = process.argv[2];
const userStatement = process.argv.slice(3);

const translated = userStatement.map(translateWord).join(' ');
const encoded = userStatement.map(encodeWord).join(' ')
const userErrorMessage = 'Must use either translate or encode function.'

switch (command) {
  case 'translate':
    console.log(translated);
    return translated;

  case 'encode':
    console.log(encoded);
    return encoded;

  default:
    console.log(userErrorMessage);
    return userErrorMessage;
}

