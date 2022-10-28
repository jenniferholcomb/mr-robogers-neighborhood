// Business Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

function onlyNumbers(testString) {
  return /^[0-9]+$/.test(testString);
}

function checkAllNumbers (inputNumbers) {
  if (isEmpty(inputNumbers) || !onlyNumbers(inputNumbers)) {
    console.log("string has characters");
    return 0;
  }
  const creditCardNumbers = inputNumbers.trim().split("");
  let doubledArray = [];
  let normalArray = [];
    for (index = (creditCardNumbers.length - 1); index >= 0 ; index -= 2) {      
      let newNumber = creditCardNumbers[index] * 2;
      if (newNumber > 9) {
        let doubleDigit = String(newNumber).split('').reduce((acc, curr) => {return acc + Number(curr);},0);
        doubledArray.push(doubleDigit);
        console.log('double digit result: ' + doubleDigit);
      } else {
        doubledArray.push(newNumber);
      }
    }
    for (index = (creditCardNumbers.length); index >= 0 ; index -= 2) {
      normalArray.push(creditCardNumbers[index]);
    }
    console.log(doubledArray, normalArray);
}

// UI Logic

function handleFormSubmission(e){

  e.preventDefault();
  const inputNumber = parseInt(document.getElementById("input-value-1").value);
  console.log("inputNumber1: ", inputNumber1);
  const numIncrement = multiplier(inputNumber1);

  console.log("numIncrement: ", numIncrement);
}

window.addEventListener("load", function(){

  document.querySelector("form#number-in").addEventListener("submit", handleFormSubmission);
});