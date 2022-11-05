// Business Logic
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
    newArray.push(" " + "Won't you be my neighbor?");
  }
  else if (indexCounter === 2) {
    newArray.push(" " + "Boop!");
  }
  else if (indexCounter === 1) {
    newArray.push(" " + "Beep!");
  }
  else {
    newArray.push(" " + indexCounter);
  }
  return newArray;
}

function computeInput(numberArray, newArray) {
  let indexCounter = 0;
  numberArray.forEach(function() {
    if (indexCounter < 10) {
      newArray = checkValues(indexCounter, newArray);
    }
    else {
      let str = indexCounter.toString();
      const doubleDigitArray = str.split('');
      let i = 0;
      let doubleEvaluateArray = []; 
      doubleDigitArray.forEach(function() {
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
        checkValues(number, newArray);
      }
      else {
        newArray.push(" " + indexCounter);
      }
    }
    indexCounter++;
  });
  console.log("function" + newArray);
  return indexCounter;
}

function reverse(finalArray) {
  const reverseArray = [];
  for (let index = (finalArray.length - 1); index >= 0 ; index -= 1) {      
    reverseArray.push(finalArray[index]);
  }
  return reverseArray;
}

// UI Logic

function handleFormSubmission(e){
  e.preventDefault();
  let newArray = [];
  const inputNumber = (document.getElementById("input-value-1")).value;
  document.getElementById("output-passage").removeAttribute("class");
  console.log(newArray);
  document.getElementById("user-input").innerText = computeInput((numToArray(inputNumber)), newArray) - 1;
  console.log(newArray);
  document.getElementById("user-output").innerText = newArray;
  document.getElementById("reverse-output").innerText = reverse(newArray);
  document.querySelector("form#number-in").reset();
  newArray = [];
}

window.addEventListener("load", function(){
  document.querySelector("form#number-in").addEventListener("submit", handleFormSubmission);
});