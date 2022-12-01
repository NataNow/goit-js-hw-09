// Імпорт notiflix
import Notiflix from 'notiflix';

// Запис константи на форму введення даних
const form = document.querySelector('.form');
// Створення слухача на кнопку
form.addEventListener('submit', createPromiseBtn);

// Відправка форми по натиканню кнопки createPromiseBtn із значеннями введеними у форму
function createPromiseBtn(event) {
  // Блокування перезавантаження сторінки
  event.preventDefault();

  // Запис значень записаних в рядки форми у константи
  const delayValue = Number(event.currentTarget.delay.value);
  const stepValue = Number(event.currentTarget.step.value);
  const amountValue = Number(event.currentTarget.amount.value);

  createPromiseAction(delayValue, stepValue, amountValue);
};

// Функція сворення промісів із спливаючими вікнами відповідно до значень у рядках форми
function createPromiseAction(delay, step, amount) {
  for (let position = 1; position <= amount; position += 1) {

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    delay += step;
  }
};

// Функція, що на момент сабміту форми викликається "amount" разів, підчас виклику до неї передається номер промису (position), враховуючи затримку firstDelay і delay з кроком step
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const data = { position, delay };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(data);
      } else {
        reject(data);
      }
    }, delay);
  });
};

// Один додатковий проміс, що виводиться в console.log зі значеннями з ДЗ
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });