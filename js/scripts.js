// Business Logic

const newArray = [];

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

function checkValues(indexCounter) {
  const array = newArray;
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
}

function numberGreatest (array) {
  const number = Math.max.apply(null, array);
  return number;
}

function computeInput(numberArray) {
  console.log(numberArray);
  indexCounter = 0;
  numberArray.forEach(function(number) {
    if (indexCounter < 10) {
      checkValues(indexCounter);
    }
    else {
      let str = indexCounter.toString();
      const doubleDigitArray = str.split('');
      i = 0;
      doubleEvaluateArray = [];
      console.log(doubleDigitArray);
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
      let numGreat = numberGreatest(doubleEvaluateArray);
      console.log("this is the greatest number:", numGreat);
    }
    indexCounter++;
  });
  console.log(newArray);
}


//   const creditCardNumbers = inputNumbers.trim().split("");
//   let doubledArray = [];
//   let normalArray = [];
//     for (index = (creditCardNumbers.length - 1); index >= 0 ; index -= 2) {      
//       let newNumber = creditCardNumbers[index] * 2;
//       if (newNumber > 9) {
//         let doubleDigit = String(newNumber).split('').reduce((acc, curr) => {return acc + Number(curr);},0);
//         doubledArray.push(doubleDigit);
//         console.log('double digit result: ' + doubleDigit);
//       } else {
//         doubledArray.push(newNumber);
//       }
//     }
//     for (index = (creditCardNumbers.length); index >= 0 ; index -= 2) {
//       normalArray.push(creditCardNumbers[index]);
//     }
//     console.log(doubledArray, normalArray);
// }

// UI Logic

function handleFormSubmission(e){
  e.preventDefault();
  const inputNumber = (document.getElementById("input-value-1")).value;
  const numOutput = computeInput(numToArray(inputNumber));
}

window.addEventListener("load", function(){
  document.querySelector("form#number-in").addEventListener("submit", handleFormSubmission);
});