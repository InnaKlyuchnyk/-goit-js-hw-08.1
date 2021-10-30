import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
const formData = {};

populateFormEl();

formEl.addEventListener('submit', onBtnSubmit);
formEl.addEventListener('input', throttle(onInputTyping, 500));

function onBtnSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;
  const formInfomation = {
    email,
    message,
  };
  console.log(formInfomation);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputTyping(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormEl() {
  const savedInformation = localStorage.getItem(STORAGE_KEY);
  const parsedSavedInformation = JSON.parse(savedInformation);

  if (parsedSavedInformation) {
    inputEl.value = parsedSavedInformation.email;
    textareaEl.value = parsedSavedInformation.message;
  }
}
