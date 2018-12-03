const { readFileSync } = require('fs');

const puzzleInputArray = readFileSync('puzzleInput.txt', 'utf8')
  .toString()
  .split('\n');

// PART 1
const findFinalFrequency = puzzleInputArray.reduce((acc, elem) => {
  acc += Number(elem);
  return acc;
}, 0);

console.log(`PART 1: finalFrequencySum = ${findFinalFrequency}`)

// PART 2
const testInputArray1 = ['+1', '-1'];                   // duplicate is 0 
const testInputArray2 = ['+3', '+3', '+4', '-2', '-4']; // duplicate is 10 
const testInputArray3 = ['-6', '+3', '+8', '+5', '-6']; // duplicate is 5
const testInputArray4 = ['+7', '+7', '-2', '-7', '-4']; // duplicate is 14 
const frequenciesArr = [0];

// Builds the frequency array from the imput data
const populateFrequenciesArray = array =>
  array.forEach(elem => {
    frequenciesArr.push(frequenciesArr.slice(-1)[0] + Number(elem));
  });

// Extra feature: keeps track of recursion 
let recursiveCount = 0;

const findFirstDuplicateFrequency = () => {
  // Populate the frequency array
  populateFrequenciesArray(puzzleInputArray);
  // Check for the the duplicate
  const duplicateFound = frequenciesArr.find(
    (k, i) => frequenciesArr.indexOf(k) !== i
  );
  // Recurr until duplicate is found
  while (duplicateFound === undefined) {
    recursiveCount++;
    console.log(`recursiveCount: ${recursiveCount}`);
    return findFirstDuplicateFrequency();
  }
  return duplicateFound;
};

console.log(`PART 2: firstDuplicate = ${findFirstDuplicateFrequency()}`);
