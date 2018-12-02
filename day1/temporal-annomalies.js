const fs = require('fs');

const puzzleInputArray = fs.readFileSync('puzzleInput.txt', 'utf8').toString().split('\n');

const findFinalFrequency = puzzleInputArray.reduce((acc, elem) => {
  acc += Number(elem);
  return acc;
}, 0);

console.log(findFinalFrequency);
