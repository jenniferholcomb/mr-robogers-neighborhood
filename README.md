# mr-robogers-neighborhood

#### By Jennifer Holcomb

#### A user survey about programming languages.

## Technologies Used

* HTML
* CSS
* JAVASCRIPT
* Bootstrap

## Description

This browser application allows users to participate in a 5 question survey to determine what programming language they should learn first.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of your directory.
* Open index.html

##Tests

''' 
Describe: emptyString(input)

Test: "It should return 0 for an empty string."
Code: isEmpty(input);
Expected Output: 0

Describe: numToArray()

Test: "Take input number, return an array with all numbers 0 to inputnumber"
Code: 
const number = "9";
const numberArray = [];
numToArray(number);
Expected Output: "1, 2, 3, 4, 5, 6, 7, 8, 9"

Describe: checkValues()

Test: "Numbers 1-9, look for any number that starts with a 1. Return string with "Beep! in place of 1."
Code: 
const number = "9";
const wordOne = "Beep!";
checkValues(number);
Expected Output: 0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9

Test: "Numbers 1-9, look for any number that starts with a 2. Return string with "Boop! in place of 2."
Code: 
const number = "9";
const wordOne = "Boop!";
checkValues(number);
Expected Output: 0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9

Test: "Numbers 1-9, look for any number that starts with a 3. Return string with "Won't you be my neighbor?" in place of 3."
Code: 
const number = "9";
const wordOne = "Won't you be my neighbor?";
checkValues(number);
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9

Describe: computeInput()

Test: "Numbers 1-9, look for any number that starts with a 3. Return string with "Won't you be my neighbor?" in place of 3."
Code: 
const number = "9";
const wordOne = "Won't you be my neighbor?";
computeInput(number);
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9

Test: "Numbers 10 and higher, split numbers to array of 2."
Code: 
const number = "10";
const doubleDigitArray = [];
computeInput(number);
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, [1,0]

Test: "Numbers 10 and higher, split numbers to array of 2."
Code: 
const number = "10";
const doubleDigitArray = [];
computeInput(number);
Expected Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, [1,0]

'''

## Known Bugs
* Fine tuning branching results.
* If any issues are discovered, please email jenniferlholcomb@gmail.com.

## License

MIT License

Copyright (c) 2022 Jennifer Holcomb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

