const API_KEY = 'a0bdedcff0c680ddc7a48178'; // Вставьте свой ключ API
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

// Загрузка доступных валют
async function loadCurrencies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data)
        const currencySelect = document.getElementById('currency-select');
        for (let currency in data.conversion_rates) {
            const option = document.createElement('option');
            option.value = currency;
            option.textContent = currency;
            currencySelect.appendChild(option);
        }
    } catch (error) {
        console.error('Error fetching currencies:', error);
    }
}

// Получение курса обмена для выбранной валюты
async function getExchangeRate() {
    const currency = document.getElementById('currency-select').value;
    try {
        const response = await fetch(API_URL);
        console.log(response)
        const data = await response.json();
        const rate = data.conversion_rates[currency];
        document.getElementById('result').textContent = `1 USD = ${rate} ${currency}`;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
    }
}

// Инициализация при загрузке страницы
window.onload = loadCurrencies;
