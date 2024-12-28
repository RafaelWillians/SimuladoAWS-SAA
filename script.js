const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
}