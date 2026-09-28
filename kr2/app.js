// Задача 1

const extractNumbers = (str) => {
    return str.split('').filter(num => /\d/.test(num))
}

console.log(extractNumbers("a1fg5hj6"));
// вернёт [1, 5, 6]


// Задача 2

const fibonacci = (a = 0, b = 1) => {
    if (a > 144) return;

    console.log(a);

    setTimeout(() => {
        fibonacci(b, a + b);
    }, 1000);
};

fibonacci();


// Задача 3

const getProducts = async () => {
    try {
        const response = await fetch('https://6ab580ea24ee9d3caa1c7e38.mockapi.io/example');
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();

        data.forEach((product) => {
            console.log(product.title);
        });
    } catch (error) {
        console.error(error.message);
    }
};

getProducts();


// Задача 4

const buttons = document.querySelector("div");

buttons.onclick = (event) => {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
}


// Задача 5

const hideButton = document.querySelector('.hide__button');
const block = document.querySelector('.block');

hideButton.onclick = () => {
    block.classList.toggle('active');
}


// Задача 6

const counterEl = document.querySelector('.number');
let count = 0;

const intervalId = setInterval(() => {
    count++;
    counterEl.innerHTML = count;

    if (count >= 100) {
        clearInterval(intervalId);
    }
}, 1);


// Задача 7

const getDataButton = document.querySelector('.get__data');

const getRequest = async () => {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();

        data.forEach((value) => {
            console.log(`${value.name}: ${value.profession}`);
        });
    } catch (error) {
        console.error(error.message);
    }
}

getDataButton.onclick = getRequest;