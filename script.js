const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
}

