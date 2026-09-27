let index = 0;

//INFO
const infoButtons = document.querySelectorAll(".info__content .info__button");
const infoContentDesc = document.querySelectorAll(".info__descption");
const infoBlock = document.querySelector(".info");
const infoButtonsParent = document.querySelector(".info__content__blocks");

const infoCloseContent = () => {
    infoButtons.forEach((button) => {
        button.classList.remove("info__active");
    })
    infoContentDesc.forEach((title) => {
        title.style.display = "none";
    })
}

const infoOpenContent = (index = 0) => {
    infoBlock.style = `background-image: url('../media/images/background/the-withcer-screenshot-${index + 1}.webp');`;
    infoButtons[index].classList.add("info__active");
    infoContentDesc[index].style.display = "block";
}

const autoOpenContent = () => {
    index++;
    if (index > infoButtons.length - 1) {
        index = 0;
    }
    infoCloseContent();
    infoOpenContent(index);
}

infoCloseContent();
infoOpenContent(index);
const infoOpenInterval = setInterval(autoOpenContent, 3000);

infoButtonsParent.onclick = (event) => {
    const selectUiAudio = document.querySelector("#selectUiAudio");
    if (event.target.classList.contains("info__button")) {
        clearInterval(infoOpenInterval);
        infoButtons.forEach((button, buttonIndex) => {
            if (event.target === button) {
                audioPlay(selectUiAudio);
                infoCloseContent();
                infoOpenContent(buttonIndex);
            }
        })
    }
}

// CONVERTER 
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const getCurrency = (element, targetElement1, targetElement2) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../data/currency.json");
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send();

    xhr.onload = () => {
        const currency = JSON.parse(xhr.response);
        element.oninput = () => {
            if (element.id === "usd") {
                targetElement1.value = (element.value * currency.usd).toFixed(2);
                targetElement2.value = (targetElement1.value / currency.eur).toFixed(2);
            }
            if (element.id === "som") {
                targetElement1.value = (element.value / currency.usd).toFixed(2);
                targetElement2.value = (element.value / currency.eur).toFixed(2);
            }
            if (element.id === "eur") {
                targetElement1.value = (element.value * currency.eur).toFixed(2);
                targetElement2.value = ((currency.eur / currency.usd) * element.value).toFixed(2);
            }
            if (element.value === "") {
                targetElement1.value = ""
                targetElement2.value = ""
            }
        }
    }
}

getCurrency(usdInput, somInput, eurInput);
getCurrency(somInput, usdInput, eurInput);
getCurrency(eurInput, somInput, usdInput);

//CADR SWITCHER
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const card = document.querySelector(".card");
let cardId = 1;

const requestUrl = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} `);
    }

    return response.json();
}

const getTodoData = async (cardId = 0) => {
    try {
        const data = await requestUrl(`https://jsonplaceholder.typicode.com/todos/${cardId}`);
        const { title, completed } = data;
        const status = completed ? '&#9989;' : '&#10062;'

        card.innerHTML = `
        <p>${title}</p>
        <span>${status}</span>
        <span>${cardId}</span>
    `
    } catch (error) {
        console.error(error.message);
        card.innerHTML = 'Ошибка сервера';
        card.style.color = 'white';
    }
}

const getPostData = async () => {
    try {
        const data = await requestUrl(`https://jsonplaceholder.typicode.com/posts`);
        console.log(data)
    } catch (error) {
        console.error(error.message);
    }
}

getTodoData(cardId)
getPostData();

btnNext.onclick = () => {
    if (cardId >= 200) {
        cardId = 1;
    } else {
        cardId++;
    }
    getTodoData(cardId); 
}

btnPrev.onclick = () => {
    if (cardId <= 1) {
        cardId = 200;
    } else {
        cardId--;
    }
    getTodoData(cardId);
}

//WEATHER
const API = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '291aa3950880603684e43c6cc36aed88';

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#search");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");

const renderWeatherContent = (data) => {
    city.innerHTML = data.name;
    city.style.color = 'white';
    temp.innerHTML = Math.round(data.main.temp) + '&#176;C';
}

const getWeather = async () => {
    if (searchInput.value) {
        const response = await fetch(`${API}?q=${searchInput.value}&units=metric&lang=ru&appid=${API_KEY}`);
        const data = await response.json();
        renderWeatherContent(data);
        searchInput.value = '';
    } else {
        city.innerHTML = 'Введите город';
        city.style.color = 'red';
        temp.innerHTML = ''
    }

}

searchButton.onclick = () => {
    getWeather();
}
