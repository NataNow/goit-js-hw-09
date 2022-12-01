// Створення змінних для подальшії роботи з кнопками
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

// Відстеження подій кліку на кнопки
btnStart.addEventListener('click', backgroundColorStart);
btnStop.addEventListener('click', backgroundColorStop);

let intervalId = null;
// функція виклику рандомного кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
// Встановлення за замовчуванням btnStop(не активна)
btnStop.setAttribute('disabled', true);

// Створення функції зміни backgroundColor відповідно до getRandomHexColor з блокуванням кнопки btnStart і розблокуванням btnStop
function backgroundColorStart() {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
};

// Створення функції блокування кнопки btnStart в час відпрацювання backgroundColorStart до кліка на кнопку btnStop
function backgroundColorStop() {
    clearInterval(intervalId);
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');
};

// Напиши скрипт, який після натискання кнопки «Start»,
// раз на секунду змінює колір фону <body> на випадкове значення,
// використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
