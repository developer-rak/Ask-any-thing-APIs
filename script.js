const buttonSelector = document.querySelector('#button');
const inputSelector = document.querySelector('#input');
const answerSelector = document.querySelector('#answer');
const errorSelector = document.querySelector('#error');

// API
const API_ENDPOINT = 'https://yesno.wtf/api';

// FLAGS
let isRequestInProgress = false;

const setIsRequestInProgress = value => {
    isRequestInProgress = value;
};

const setDisableButtonState = isDisabling => {
    if (isDisabling) {
        buttonSelector.setAttribute('disabled', 'disabled');
    } else {
        buttonSelector.removeAttribute('disabled');
    }
};

const cleanResponse = () => {
    setTimeout(() => {
        answerSelector.innerHTML = '';
        inputSelector.value = '';
        setIsRequestInProgress(false);
        setDisableButtonState(false);
    }, 3000);
};

const showAnswer = answer => {
    setTimeout(() => {
        answerSelector.innerHTML = `<img src=\"${answer}\" width=\"600px\" height=\"400px\">`;
        cleanResponse();
    }, 3000);
};

const