var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function validCallbackName(item, array) {
    var n = array[item].split("");
    var firstLater = n[0].toUpperCase();
    var rest = __spreadArray([], n, true);
    rest.splice(0, 1);
    return array[item] = __spreadArray([firstLater], rest, true).join("");
}
function validMethodName(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(i, array);
    }
    return console.log(array.join(""));
}
validMethodName(["my", "name", "is", "Vasya"], validCallbackName);
function validCallbackNumber(array, item) {
    return array[item] = array[item] * 100;
}
function validMethodNumber(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array, i);
    }
    return console.log(array.join(', '));
}
validMethodNumber([1, 2, 3], validCallbackNumber);
function validCallbackObject(item, array) {
    return "".concat(array[item].name, " is ").concat(array[item].age);
}
function validMethodObject(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(i, array);
    }
    return console.log("validMethodObject, ", array.join(', '));
}
validMethodObject([{
        age: 45,
        name: 'Jhon'
    }, {
        age: 20,
        name: 'Aaron'
    }], validCallbackObject);
function reversCallbackItem(item, array) {
    var n = array[item].split("");
    var firstLater = n.reverse();
    return array[item] = firstLater.join("");
}
function reversMethodItem(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(i, array);
    }
    return console.log("reversMethodItem, ", array.join(", "));
}
reversMethodItem(['abc', '123'], reversCallbackItem);
var rectangleFunction = function (width, height) {
    var rectangle = {
        width: width,
        height: height,
        getSquare: function () {
            return this.width * this.height;
        }
    };
    return rectangle.getSquare();
};
console.log("rectangleFunction, ", rectangleFunction(5, 7));
var price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        var discount = parseInt(this.discount) / 100;
        return (this.price - (this.price * discount)).toFixed(2);
    },
};
console.log("getPrice, ", price.getPrice());
console.log("getPriceWithDiscount, ", price.getPriceWithDiscount());
var numerator = {
    value: 1,
    double: function () {
        this.value = this.value * 2;
        return this;
    },
    plusOne: function () {
        this.value++;
        return this;
    },
    minusOne: function () {
        this.value--;
        return this;
    },
};
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);
var element = {
    height: 25,
    getHeight: function () {
        return this.height;
    },
};
var getElementHeight = element.getHeight();
console.log("getElementHeight, ", getElementHeight);
var convertToObject = function (num) {
    return {
        value: num,
        isOdd: Boolean(num % 2)
    };
};
var minus = function (valueFirst) {
    if (valueFirst === void 0) { valueFirst = 0; }
    return function (valueSecond) {
        if (valueSecond === void 0) { valueSecond = 0; }
        return valueFirst - valueSecond;
    };
};
console.log("minus, ", minus(75)(7));
var multiplyMaker = function (number) {
    if (number === void 0) { number = 0; }
    return function (nextNumber) {
        if (number === 0) {
            number = number * nextNumber;
            return number;
        }
        else {
            number = number * nextNumber;
            return number;
        }
    };
};
var multiply = multiplyMaker(2);
console.log("multiply, ", multiply(2));
console.log("multiply, ", multiply(1));
console.log("multiply, ", multiply(3));
console.log("multiply,  ", multiply(10));
var rowOperation = function (value) {
    function addRow() {
        if (typeof value === "number") {
            value = value.toString();
            return value;
        }
        else if (value === undefined) {
            return "";
        }
        else {
            return value;
        }
    }
    function getRow() {
        return value;
    }
    function lengthRow() {
        return value;
    }
    return {
        addRow: addRow,
        getRow: getRow,
        lengthRow: lengthRow,
    };
};
var module = new rowOperation('898');
console.log("module, ", module.addRow());
console.log("module, ", module.getRow());
console.log("module, ", module.lengthRow());
var Calculation = function () {
    var value = 0;
    var calc = {
        addValue: function (firstNumber) {
            value += firstNumber;
            return calc;
        },
        sum: function (secondNumber) {
            value += secondNumber;
            return calc;
        },
        degree: function (powNumber) {
            value = Math.pow(value, powNumber);
            return calc;
        },
        multiply: function (thirdNumber) {
            value *= thirdNumber;
            return calc;
        },
        getValue: function () {
            return value;
        },
    };
    return calc;
};
var modules = new Calculation();
modules.addValue(10);
modules.sum(5);
modules.multiply(2);
modules.degree(2);
console.log(modules.getValue());
console.log(modules.addValue(5).sum(5).degree(2).getValue());
var sum = function () {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    var result = item.reduce(function (a, b) { return a + b; }, 0);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var anotherNumber = args.reduce(function (a, b) { return a + b; }, 0);
        if (anotherNumber) {
            return sum(result + anotherNumber);
        }
        return result;
    };
};
console.log(sum(10)(17)());
//# sourceMappingURL=script.js.map