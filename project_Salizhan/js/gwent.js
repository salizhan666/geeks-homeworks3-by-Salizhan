const gwentCards = document.querySelector(".gwent__cards");
const API = 'https://jsonplaceholder.typicode.com/posts';

const renderCards = async (cards) => {
    const renderElements = cards.map((card) => {
        return `
        <div class="gwent__item">
            <div class="gwent__image">
                <img src="../media/images/gwent-cards/draug.png" alt="">
            </div>
            <h2>${card.title}</h2>
            <p>${card.body}</p>
        </div>
        `
    });
        
    gwentCards.innerHTML = renderElements.join('');
}

const getCards = async () => {
    try {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error(`Ошибка получения данных из JSON: ${response.status}`);
        }
        const data = await response.json();
        
        renderCards(data);
    } catch (error) {
        console.error(`Ошибка: ${error.message}`);
        gwentCards.innerHTML = `<span class="error">Ошибка загрузки данных. Пожалуйста, попробуйте позже.</span>`;
    }
}

getCards();