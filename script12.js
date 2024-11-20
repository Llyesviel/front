// ------------------ Часть 1: Определение функций ------------------

// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента по селектору
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const isVisible = window.getComputedStyle(element).display !== "none";
        element.style.display = isVisible ? "none" : "block";
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}

// Функция для обработки параметра utm_term из URL
function processUtmTerm() {
    const params = new URLSearchParams(window.location.search);
    const utmTerm = params.get("utm_term");
    const h1Element = document.querySelector("h1");
    if (h1Element) {
        if (utmTerm) {
            h1Element.textContent = utmTerm;
        }
    }
}

// ------------------ Часть 3: Порядок вызова функций ------------------

// Вызов showMessage для проверки работы скрипта
showMessage("Скрипт загружен!");

// ------------------ Часть 4: Дополнительные функции ------------------

// Функция для вывода текущего времени в консоль
function logCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString("ru-RU", { hour12: false });
    console.log(`Текущее время: ${time}`);
}

// Функция для сброса цвета фона к исходному значению
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Вызов logCurrentTime сразу после showMessage
logCurrentTime();

// Добавление обработчика события загрузки контента
document.addEventListener("DOMContentLoaded", () => {
    // Сброс фона перед изменением цвета
    resetBackgroundColor();

    // Изменение цвета фона страницы
    changeBackgroundColor("#eee");

    // Переключение видимости элемента с классом .content
    toggleVisibility(".content");

    // Обработка параметра utm_term из URL
    processUtmTerm();
});
