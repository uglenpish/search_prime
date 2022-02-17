

const inputData = document.querySelector('#data');
const inputDirections = document.querySelector('#directions');
const button = document.querySelector('.button');
const result = document.querySelector('.result');

function validateData(arr) {
    if (arr.length === 1 && Number.isInteger(arr[0]) ) {
        return true;
    } else if (arr.length === 2 && Number.isInteger(arr[0]) && Number.isInteger(arr[1])) {
        return true;
    } 
    return false;
}

function countPrime(values, direction) {
    let result = [];
    if (values.length === 1) {
        switch (direction) {
            case 0:
                result = getMaxPrime(+values[0]);
                return result;
                break;
            case 1:
                result = getPrime(values[0]);
                return result.slice(-3);
                break;
        }  
    } else (values.length === 2) 
        result = getPrime(values[1], values[0]);
        console.log(result);
        switch (direction) {
            case 0:
                return result.slice(-3);
                break;
            case 1:
                return result.slice(0, 3);
                break;
        }
    
}

function getDisplayResult(text) {
    inputData.value = "";
    result.innerText = text;
}

function isPrime(num) {
    // let max = Math.sqrt(num);
    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}    
    
function getMaxPrime(arg) {
    let arr = [];

    while(arr.length < 3) {
        arg++
        if (isPrime(arg)) {
            arr.push(arg);
        }
        
    }
    return arr;
}

function getPrime(x, n=2) {
    let arr = []
    for (let i=n; i<x; i++) {
        if (isPrime(i)) {
            arr.push(i);
        } 
    }
    return arr;
} 

button.addEventListener('click', (e) => {
    let data = inputData.value.split(',').map(string => +string).sort();
    console.log(data);
    if (!validateData(data)) {
        inputData.value = "";
        data = [];
        return getDisplayResult("Введите коректные числа");
    }

    let direction = +inputDirections.value;

    let prime = countPrime(data, direction);

    if (prime.length === 0) {
        return getDisplayResult("простых чисел в заданном интервале не обнаруженно")
    }
    
    if (prime.length < 3) {
        return getDisplayResult("меньше 3 простых чисел")
    }

    return getDisplayResult(prime);
})