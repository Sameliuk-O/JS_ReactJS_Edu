// Rounding the number Pi
const Pi = Math.PI;
const operationPi = Pi.toFixed(2);
console.log(`Rounding the number Pi \n ${operationPi}`);

// Check the result of the calculation 0.6 + 0.7
const sum = 0.6+0.7;
const operationSum = sum.toFixed(1)
console.log(`Check the result of the calculation 0.6 + 0.7 \n ${operationSum}`)

// Get number from string '$100'
const string = "100$";
const number = parseInt(string);
console.log(`Get number from string '$100' \n ${number}`);

// Get the first and last letters of a string.
const str = "some test string";
const strLength = str.length;
const firstLetter = str[0];
const lastLetter = str[strLength-1];
console.log(`Get the first and last letters of a string. \n First letter: ${firstLetter}\n Last letter: ${lastLetter}`);

// Capitalize the first and last letter
const firstUpperLetter = firstLetter.toUpperCase();
const lastUpperLetter = lastLetter.toUpperCase();
const lowLetter = str.slice(1,-1);
console.log(`Capitalize the first and last letter: \n ${firstUpperLetter + lowLetter + lastUpperLetter}`);

// Find the position of the second space
const gapPosition = str.indexOf(' ', str.indexOf(' ') + 1);
console.log(`Find the position of the second space \n ${gapPosition}`);

// Get a new string without the last 6 characters
const deleteText = str.slice(0,-6);
console.log(`Get a new string without the last 6 characters \n ${deleteText}`);

//Create a function to which you can pass the apartment number
// and when called, the entrance number will be returned.
const yourEntrance = Number(prompt("Enter the apartment number: "));

function numberApartment(yourEntrance)  {
    if (yourEntrance >= 1 && yourEntrance <= 20){
        console.log("You live in the first entrance")
    }else if (yourEntrance >= 21 && yourEntrance <= 40){
        console.log("You live in the second entrance")
    } else if (yourEntrance>= 41 && yourEntrance <= 60){
        console.log("You live in the third entrance")
    }else {
        console.log("You don't chew in this house")
    }
}
numberApartment(yourEntrance)

