//HOF

function validCallbackName(item) {
    return console.log(item)
}

function validMethodName(array, callback) {
    for (let i = 0; i <= array.length; i++) {
        if ('string' === typeof array[i]) {
            const n = array[i].split("");
            const firstLater = n[0].toUpperCase();
            const rest = [...n];
            rest.splice(0, 1);
            array[i] = [firstLater, ...rest].join("")
        }
    }
    callback(array.join(""))
}

validMethodName(["my", "name", "is", "Vasya"], validCallbackName);

function validCallbackNumber(item) {
    return console.log(item)
}

function validMethodNumber(array, callback) {
    for (let i = 0; i <= array.length; i++) {
        if ("number" === typeof array[i]) {
            array[i] = array[i] * 100;
        }
    }
    callback(array.join(', '))
}

validMethodNumber([1, 2, 3], validCallbackNumber);

function validCallbackObject(item) {
    return console.log(item)
}

function validMethodObject(array, callback) {
    for (let i = 0; i < array.length; i++) {
        array[i] = `${array[i].name} is ${array[i].age}`
    }
    callback(array.join(', '))
}

validMethodObject([{
    age: 45,
    name: 'Jhon'
}, {
    age: 20,
    name: 'Aaron'
}], validCallbackObject);

function reversCallbackItem(item) {
    return console.log(item)
}

function reversMethodItem(array, callback) {
    for (let i = 0; i <= array.length; i++) {
        if ('string' === typeof array[i]) {
            const n = array[i].split("");
            const firstLater = n.reverse();
            array[i] = firstLater.join("")
        }
    }
    callback(array.join(", "))
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
        return (this.price - (this.price * discount));
    },
};
price.getPrice();
price.getPriceWithDiscount();

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

function minus(valueFirst) {
    if (valueFirst === undefined) {
        return function (valueSecond) {
            if (valueSecond === undefined) {
                return 0
            } else {
                return 0 - valueSecond;
            }
        }
    } else {
        return function (valueSecond) {
            if (valueSecond === undefined) {
                return valueFirst - 0;
            } else {
                return valueFirst - valueSecond;
            }
        }
    }
}

console.log(minus(5)(0))

// Closser 5.2
let result = 0
const multiplyMaker = (number) => {
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
            return value.toString()
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

let module = new rowOperation("Add row");
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
function sumCalculation() {
    return function addNumber(n) {
        const sumFunction = function (x) {
            return addNumber(n + x);
        };

        sumFunction.toString = function () {
            return n;
        };
        return sumFunction;
    }
}

let sum = sumCalculation();


console.log(+sum(1)(2)(5)(10));