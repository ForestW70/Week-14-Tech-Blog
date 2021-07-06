const logInDisplay = document.getElementById('login-screen');
const createActDisplay = document.getElementById('create-act-screen');
const logPanel = document.getElementById('loginPanel');
const createPanel = document.getElementById('createAccountPanel');
const warningMsg = document.getElementById('warning');

if (warningMsg.innerText === "") {
    warningMsg.style.display = 'none';
} else {
    warningMsg.style.display = 'flex';
}

const displayLogin = () => {
    logPanel.classList.remove('hide');
    createPanel.classList.add('hide');
    createActDisplay.classList.remove('on');
    logInDisplay.classList.add('on');
}

const displayCreateAct = () => {
    logPanel.classList.add('hide');
    createPanel.classList.remove('hide');
    logInDisplay.classList.remove('on');
    createActDisplay.classList.add('on');
}

logInDisplay.addEventListener('click', displayLogin);
createActDisplay.addEventListener('click', displayCreateAct);