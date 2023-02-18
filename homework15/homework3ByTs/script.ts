//HOF

function validCallbackName(item: number, array: string[]): string {
    const n = array[item].split("");
    const firstLater = n[0].toUpperCase();
    const rest = [...n]
    rest.splice(0, 1)
    return array[item] = [firstLater, ...rest].join("")
}

function validMethodName(array: string[], callback: (i: number, array: string[]) => string): void {
    for (let i = 0; i < array.length; i++) {
        callback(i, array)
    }
    return console.log(array.join(""))
}

validMethodName(["my", "name", "is", "Vasya"], validCallbackName);

function validCallbackNumber(array: number[], item: number): number {
    return array[item] = array[item] * 100;
}

function validMethodNumber(array: number[], callback: (array: number[], i: number) => number): void {
    for (let i = 0; i < array.length; i++) {
        callback(array, i)
    }
    return console.log(array.join(', '))
}

validMethodNumber([1, 2, 3], validCallbackNumber);


interface ValueValidMethodObject {
    age: number,
    name: string
}

function validCallbackObject(item: number, array: ValueValidMethodObject[]): string {
    return `${array[item].name} is ${array[item].age}`
}

function validMethodObject(array: ValueValidMethodObject[], callback: (item: number, array: ValueValidMethodObject[]) => string): void {
    for (let i = 0; i < array.length; i++) {
        callback(i, array)
    }
    return console.log("validMethodObject, ", array.join(', '))
}

validMethodObject([{
    age: 45,
    name: 'Jhon'
}, {
    age: 20,
    name: 'Aaron'
}], validCallbackObject);

function reversCallbackItem(item: number, array: string[]): string {
    const n = array[item].split("");
    const firstLater = n.reverse();
    return array[item] = firstLater.join("")
}

function reversMethodItem(array: string[], callback: (i: number, array: string[]) => string): void {
    for (let i = 0; i < array.length; i++) {
        callback(i, array)
    }
    return console.log("reversMethodItem, ", array.join(", "))
}

reversMethodItem(['abc', '123'], reversCallbackItem);

//this 3.1


interface Rectangle {
    width: number,
    height: number
}

type RectangleProps = Rectangle & {
    getSquare: () => number
}
const rectangleFunction = (width: Rectangle['width'], height: Rectangle['height']): number => {
    const rectangle: RectangleProps = {
        width: width,
        height: height,
        getSquare: function () {
            return this.width * this.height
        }
    }
    return rectangle.getSquare();
}
console.log("rectangleFunction, ", rectangleFunction(5, 7))

//this 3.2

interface PriceProps {
    price: number,
    discount: string,
    getPrice: () => number,
    getPriceWithDiscount: () => string
}

const price: PriceProps = {
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
console.log("getPrice, ", price.getPrice());
console.log("getPriceWithDiscount, ", price.getPriceWithDiscount());

//this3.3


interface Numerator {
    value: number;
    double(): this;
    plusOne(): this;
    minusOne(): this;
}

const numerator: Numerator = {
    value: 1,
    double() {
        this.value = this.value * 2;
        return this;
    },
    plusOne() {
        this.value++;
        return this;
    },
    minusOne() {
        this.value--;
        return this;
    },
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

//this 3.4

interface ElementProps {
    height: number,
    getHeight: () => number
}

const element: ElementProps = {
    height: 25,
    getHeight: function () {
        return this.height;
    },
};
const getElementHeight = element.getHeight();
console.log("getElementHeight, ", getElementHeight);

// row function 4
type ConvertToObjectProps = (num: number) => void
const convertToObject: ConvertToObjectProps = (num) => {
    return {
        value: num,
        isOdd: Boolean(num % 2)
    };
}

//Closser 5.1


const minus = (valueFirst: number = 0) => {
    return function (valueSecond: number = 0): number {
        return valueFirst - valueSecond;
    }
}

console.log("minus, ", minus(75)(7))

// // Closser 5.2

const multiplyMaker = (number: number = 0): (number) => number => {
    return function (nextNumber: number) {
        if (number === 0) {
            number = number * nextNumber;
            return number;
        } else {
            number = number * nextNumber
            return number
        }
    };
}

const multiply = multiplyMaker(2)
console.log("multiply, ", multiply(2))
console.log("multiply, ", multiply(1))
console.log("multiply, ", multiply(3))
console.log("multiply,  ", multiply(10))

//Closser 5.3
interface RowOperation {
    addRow(): string;
    getRow(): string;
    lengthRow(): string;
}

const rowOperation: (value:  string | number) => void = (value:  any ): RowOperation => {
    function addRow(): (any) {
        if (typeof value === "number") {
            value = value.toString();
            return value;
        } else if (value === undefined) {
            return "";
        } else {
            return value;
        }
    }

    function getRow(): string {
        return value;
    }

    function lengthRow(): string  {
        return value;
    }

    return {
        addRow,
        getRow,
        lengthRow,
    };
}


let module: RowOperation = new rowOperation('898');
console.log("module, ", module.addRow());
console.log("module, ", module.getRow());
console.log("module, ", module.lengthRow())

// Closser 5.4

interface Calculator {
    Calculation?: void
    addValue: (firstNumber: number) => object,
    sum: (secondNumber: number) => object,
    degree: (powNumber: number) => object,
    multiply: (thirdNumber: number) => object,
    getValue: () => number
}


const Calculation: () => void = (): Calculator => {
    let value: number = 0;
    const calc: Calculator = {
        addValue: (firstNumber): Calculator => {
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


// // Function sum 6

const sum: (value: number) => any = (...item: Array<number>): () => number => {
    let result: number = item.reduce((a, b) => a + b, 0)
    return function (...args: Array<number>): number {
        let anotherNumber: number = args.reduce((a: number, b: number) => a + b, 0)
        if (anotherNumber) {
            return sum(result + anotherNumber)
        }
        return result
    }
}

console.log(sum(10)(17)());