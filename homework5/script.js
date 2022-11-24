/** 1 Create search input*/

const SEARCH_INPUT = document.getElementById('search-input');

const debounce = (func, timeout = 1000) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);

        }, timeout);
    };
}

const handleShowSearchResult = () => {
    document.getElementById('result-search-list').style.display = 'block';
}

const handleProcessChanges = debounce(() => {
    handleShowSearchResult();
});

SEARCH_INPUT.addEventListener('input', handleProcessChanges);

SEARCH_INPUT.addEventListener('beforeinput', () => {
    document.getElementById('result-search-list').style.display = 'none';
});

/** 2.1 isPrime - Returns true or false, indicating whether the given number is prime.*/

const isPrime = (value) => {
    if (value % 1 || value < 2) {
        return false;
    } else {
        let valueSquare = Math.sqrt(value);
        for (let i = 2; i <= valueSquare; i++)
            if (value % i === 0) return false;
        return true;
    }
}

isPrime(0);
isPrime(1);
isPrime(17);
isPrime(100000000000);

/** 2.2 factorial - Returns a number that is the factorial of the given number.*/

const factorial = (value) => {
    if (value !== 1 && value !== 0) return value * factorial(value - 1);
    return 1;
}
factorial(0);
factorial(1);
factorial(6);

/** 2.3 fib - Returns the nth Fibonacci number.*/

const fib = (value) => {
    if (value <= 1) return value;
    return fib(value - 1) + fib(value - 2);
}
fib(10);

/** 2.4 isSorted - Returns true or false, indicating whether the given array of numbers is sorted.*/

const isSorted = (array) => {
    return array.every((_, i) => (i < array.length - 1 ? array[i] <= array[i + 1] : true));
}

isSorted([3, 9, 9, 10]);

/** 2.5 reverse - Reverses the given string (yes, using the built in reverse function is cheating).*/

const reverse = (string) => {
    let reverseString = "";
    if (string.length === 0) {
        return "";
    } else {
        for (let i = string.length - 1; i >= 0; i--) {
            reverseString += string[i];
        }
        return reverseString;
    }

}

reverse('abcdef');

/** 2.6 indexOf - Implement the indexOf function for arrays.*/

const indexOf = (array, value, indexStart = 0) => {
    let indexElement = -1
    for (let i = indexStart; i <= array.length; i++) {
        if (array[i] === value) {
            return indexElement = i;
        }
    }
    return indexElement;
}

indexOf([1, 2, 3], 4);

/** 2.7 isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space
 * insensitive).*/

const isPalindrome = (string) => {
    let newString = string.toLowerCase().replace(/ /g, '')
    if (string === "") {
        return true;
    } else {
        return newString === reverse(newString);
    }
}

isPalindrome('A man a plan a canal Panama');


/** 2.8 missing - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and returns
 *  the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do
 *  it in O(N) time? Hint: There’s a clever formula you can use.*/

const missing = (array) => {
    let missingArray = 1;
    for (let i = 1; i <= array.length; i++) {
        if (indexOf(array, i) === -1) {
            return missingArray = i;
        }
    }
}

missing([1, 2, 3, 5, 7, 6, 8]);

/** 2.7 isBalanced - Takes a string and returns true or false indicating whether its curly braces are balanced.*/

const isBalanced = (string) => {
    const openBrackets = /{/;
    const closeBrackets = /}/;
    const invertBrackets = {
        '}': '{',
    };
    let currentValue, opener;
    const arr = string.split('');
    const stack = [];
    while (arr.length) {
        currentValue = arr.shift();
        if (openBrackets.test(currentValue)) {
            stack.push(currentValue);
        } else if (closeBrackets.test(currentValue)) {
            opener = stack.pop(currentValue);
            if (opener !== invertBrackets[currentValue]) {
                return false;
            }
        }
    }

    return !stack.length;
}

isBalanced('}{');
isBalanced('{{}');
isBalanced('{}{}');
isBalanced('foo { bar { baz } boo }');
isBalanced('foo { bar { baz }');
isBalanced('foo { bar } }');

/** 3 Matrix*/

const spiralMatrix = (R, C, r0, c0) => {
    let i = 0;
    const direction = [0, 1, 0, -1, 0];
    const result = [];

    let len = 0;
    let d = 0;

    const array2D = (R, C) => {
        for (let y = 0; y < R; y++) {
            result[y] = [];
            for (let x = 0; x < C; x++) {
                result[y][x] = '*';
            }
        }
        return result[i++] = [r0, c0];
    }

    array2D(R, C);

    while (i < R * C) {
        if (d === 0 || d === 2) {
            len++

        }
        for (let j = 0; j < len; j++) {
            r0 += direction[d];
            c0 += direction[d + 1];
            if (r0 >= 0 && r0 < R && c0 >= 0 && c0 < C) {
                result[i++] = [r0, c0];
            }
        }
        d = (d + 1) % 4;
    }

    return result;
}

spiralMatrix(1, 4, 0, 0);
spiralMatrix(5, 6, 1, 4);