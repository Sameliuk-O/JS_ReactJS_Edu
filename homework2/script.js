// Create a multiple() function that can accept an unlimited number of arguments and multiplies them

const multiple = (...arguments) => {
    let product = 1;
    for (let i = 0; i < arguments.length; i++) {
        product *= Number(arguments[i]);
    }
    return (product);
}

multiple();

// Create a reverseString() function that takes 1 argument of any type and reverses it.

const reverseString = (text) => {
    let yourTextSting = text + '';
    return yourTextSting.split("").reverse().join("");
}

reverseString();

// Create a function to guess a number.

const minNumber = 1;
const maxNumber = 10;
const guessTheNumber = (number) => {
    if (number >= minNumber && number <= maxNumber) {
        const random = minNumber + Math.floor(Math.random() * (maxNumber - minNumber));
        const randomNumber = Math.round(random)
        if (number === randomNumber) {
            return "You Win!"
        } else {
            return(`You are lose, your number is ${number}, the random number is ${randomNumber}`)
        }
    } else if (number < minNumber || number > maxNumber) {
        return new Error("Please provide number in range 1 - 10");
    } else if (typeof number !== 'number') {
        return new Error("Please provide a valid number")
    }
}

guessTheNumber();

// There is an array of numbers (positive, negative, and mixed). You need to find min, max, sum

const searchArray = (arr) => {
    let minValue = arr[0];
    let maxValue = arr[0];
    let sumValue = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
        if (typeof arr[i] === "number" && !isNaN(arr[i])) {
            sumValue += arr[i];
        }
    }
    return {minValue, maxValue, sumValue}
}
searchArray();

// Calculate the amount of water collected in the pit after the rain

const searchWater = (mountainArray) => {
    const matrixMountain = [];
    const W = mountainArray.length;
    const H = Math.max(...mountainArray);

    for (let y = 0; y < H; y++) {
        matrixMountain[y] = [];
        for (let x = 0; x < W; x++) {
            if (y < mountainArray[x]) {
                matrixMountain[y][x] = '0';
            } else {
                matrixMountain[y][x] = `*`;
            }
        }
    }

    const matrixMountainRevers = [...matrixMountain].reverse();
    const result = matrixMountainRevers.map((array, i) => {
        return array.map((element, index) => {
            if (element === "*") {
                const indexRows = [];
                array.forEach((el, pos) => {
                    if (el === "0") {
                        indexRows.push(pos);
                    }
                });

                let isLeftRow = -1;
                let isRightRow = -1;

                indexRows.forEach((r, i) => {
                    if (r < index) {
                        isLeftRow = r;
                    }
                    if (r > index) {
                        isRightRow = r;
                    }
                });
                if (isRightRow !== -1 && isLeftRow !== -1) {
                    return '*';
                } else {
                    return ' ';
                }
            }
            return element;

        });
    });

    let numberWater = 0;
    result.forEach((array, index) => {
        array.forEach((value, i) => {
            if (value === '*') {
                numberWater++;
            }
        })
    })
    return numberWater;
}

searchWater();
