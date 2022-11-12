//HOF

function validCallbackName(item, array) {
    const n = array[item].split("");
    const firstLater = n[0].toUpperCase();
    const rest = [...n]
    rest.splice(0, 1)
    return array[item] = [firstLater, ...rest].join("")
}

function validMethodName(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(i, array)
    }
    return console.log(array.join(""))
}

validMethodName(["my", "name", "is", "Vasya"], validCallbackName);

function validCallbackNumber(array, item) {
    return array[item] = array[item] * 100;
}

function validMethodNumber(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array, i)
    }
    return console.log(array.join(', '))
}

validMethodNumber([1, 2, 3], validCallbackNumber);

function validCallbackObject(item, array) {
    return array[item] = `${array[item].name} is ${array[item].age}`
}

function validMethodObject(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(i, array)
    }
    return console.log(array.join(', '))
}

validMethodObject([{
    age: 45,
    name: 'Jhon'
}, {
    age: 20,
    name: 'Aaron'
}], validCallbackObject);

function reversCallbackItem(item, array) {
    const n = array[item].split("");
    const firstLater = n.reverse();
    return array[item] = firstLater.join("")
}

function reversMethodItem(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(i, array)
    }
    return console.log(array.join(", "))
}

reversMethodItem(['abc', '123'], reversCallbackItem);

//this 3.1

const rectangleFunction = (width, height) => {
    const rectangle = {
        width: width,
        height: height,
        getSquare: function () {
            return this.width * this.height
        }
    }
    return rectangle.getSquare();
}
console.log(rectangleFunction(5, 7))

//this 3.2

const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price
    },
    getPriceWithDiscount: function () {
        let discount = parseInt(this.discount) / 100;
        return (this.price - (this.price * discount)).toFixed(2);
    },
};
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());

//this3.3

const numerator = {
    value: 1,
    double() {
        this.value = this.value * 2;
        return this;
    },
    plusOne: function () {
        this.value++;
        return this;
    },
    minusOne: function () {
        this.value--;
        return this
    },
}

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value)

//this 3.4

const element = {
    height: 25,
    getHeight: function () {
        return this.height;
    },
};
const getElementHeight = element.getHeight();
console.log(getElementHeight);

// row function 4

const convertToObject = (num) => {
    return {
        value: num,
        isOdd: Boolean(num % 2)
    };
}

//Closser 5.1

function minus(valueFirst = 0) {
    return function (valueSecond) {
        if (valueSecond === undefined) {
            return valueFirst;
        } else {
            return valueFirst - valueSecond;
        }
    }
}

console.log(minus(75)(7))

// // Closser 5.2

const multiplyMaker = (number) => {
    let result = 0;
    return function (nextNumber) {
        if (result === 0) {
            result = number * nextNumber;
            return result;
        } else {
            result = result * nextNumber
            return result
        }
    };
}

const multiply = multiplyMaker(2)
console.log(multiply(2))
console.log(multiply(1))
console.log(multiply(3))
console.log(multiply(10))

//Closser 5.3
function rowOperation(value) {
    this.addRow = function () {
        if (typeof value === "number") {
            value = value.toString()
            return value
        } else if (value === "undefined") {

            return ""
        } else {
            return value
        }
    }

    this.getRow = function () {
        return value
    }

    this.lengthRow = function () {
        return value.length
    }
}

let module = new rowOperation(898);
console.log(module.addRow());
console.log(module.getRow());
console.log(module.lengthRow())

// Closser 5.4

function Calculation() {
    let value = 0;
    const calc = {
        addValue: (firstNumber) => {
            value += firstNumber;
            return calc;
        },
        sum: (secondNumber) => {
            value += secondNumber;
            return calc;
        },
        degree: (powNumber) => {
            value = Math.pow(value, powNumber)
            return calc
        },

        multiply: (thirdNumber) => {
            value *= thirdNumber;
            return calc
        },
        getValue: () => {
            return value;
        },
    }
    return calc;
}

let modules = new Calculation();
modules.addValue(10);
modules.sum(5);
modules.multiply(2);
modules.degree(2);
console.log(modules.getValue());

console.log(modules.addValue(5).sum(5).degree(2).getValue())

// Function sum 6

const sum = (...item) => {
    let result = item.reduce((a, b) => a + b, 0)
    return function (...args) {
        let anotherNumber = args.reduce((a, b) => a + b, 0)
        if (anotherNumber) {
            return sum(result + anotherNumber)
        }
        return result
    }
}

console.log(sum(10)(17)());