// Business Logic

//const newArray = [];

function isEmpty(input) {
  return (input.trim().length === 0);
}

function numToArray (input) {
  if (isEmpty(input)) {
    return 0;
  }
  const userInputNumber = parseInt(input);
  const numberArray = [];
  for (let indexCounter = 0; indexCounter <= userInputNumber; indexCounter++) {
    numberArray.push(indexCounter);
  }
  return numberArray;
}

function checkValues(indexCounter, newArray) {
  if (indexCounter === 3) {
    newArray.push("Won't you be my neighbor?");
  }
  else if (indexCounter === 2) {
    newArray.push("Boop!");
  }
  else if (indexCounter === 1) {
    newArray.push("Beep!");
  }
  else {
    newArray.push(indexCounter);
  }
  return newArray;
}

function computeInput(numberArray, newArray) {
  console.log(numberArray);
  indexCounter = 0;
  numberArray.forEach(function(number) {
    if (indexCounter < 10) {
      checkValues(indexCounter, newArray);
    }
    else {
      let str = indexCounter.toString();
      const doubleDigitArray = str.split('');
      i = 0;
      doubleEvaluateArray = []; 
      doubleDigitArray.forEach(function(number) {
        if (parseInt(doubleDigitArray[i]) === 3) {
          doubleEvaluateArray.push(doubleDigitArray[i]);
        }
        else if (parseInt(doubleDigitArray[i]) === 2) {
          doubleEvaluateArray.push(doubleDigitArray[i]);
        }
        else if (parseInt(doubleDigitArray[i]) === 1) {
          doubleEvaluateArray.push(doubleDigitArray[i]);
        }
        i++;
      });
      if (doubleEvaluateArray.length > 0) {
        const number = Math.max.apply(null, doubleEvaluateArray);
        checkValues(number);
      }
      else {
        newArray.push(indexCounter);
      }
    }
    indexCounter++;
  });
  console.log(newArray);
}


// UI Logic

function handleFormSubmission(e){
  e.preventDefault();
  const inputNumber = (document.getElementById("input-value-1")).value;
  let newArray = [];
  const numOutput = computeInput(numToArray(inputNumber, newArray));
  document.querySelector("form#number-in").reset();
  newArray = [];
  console.log("here");
}

window.addEventListener("load", function(){
  document.querySelector("form#number-in").addEventListener("submit", handleFormSubmission);


});