const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const donateNav = document.querySelector('.donate-nav');
const donateInfo = document.querySelector('.donate-info');
const exitDonateBtn = document.querySelector('.exit-donate-btn');

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;
let randomQuestions = getRandomQuestions(questions, 65);

// Função para embaralhar e selecionar 65 perguntas aleatórias
function getRandomQuestions(questionsArray, count) {
    const shuffled = questionsArray.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    
    showQuestions(0);
    questionCounter(1);
    headerScore();
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');
    
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    
    randomQuestions = getRandomQuestions(questions, 65);
    
    showQuestions(questionCount);
    questionCounter(questionNumb);    
    headerScore();
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    resultBox.classList.remove('active');
    nextBtn.classList.remove('active');
    
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

donateNav.onclick = () => {
    donateInfo.classList.add('active');
    main.classList.add('active');
}

exitDonateBtn.onclick = () => {    
    donateInfo.classList.remove('active');
    main.classList.remove('active');
}

/*
Implementar em breve o botao confirmar

const confirmBtn = document.querySelector('.confirm-btn');

confirmBtn.onclick = () => {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    console.log(correctAnswer);
    // mudar mecanismo depois
    if(userAnswer == correctAnswer) {
        console.log('Resposta correta');
        answer.classList.add('correct');
    }
    else {
        console.log('Resposta incorreta');
        answer.classList.add('wrong');
    }
}
*/

nextBtn.onclick = () => {
    if(questionCount < randomQuestions.length - 1) {
        questionCount++;
        questionNumb++;

        showQuestions(questionCount);        
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    }
    else {
        showResultBox();
    }
}

// carregar as questoes do array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questionNumb}. ${randomQuestions[index].question}`;

    let optionTag = `<div class="option"><span>${randomQuestions[index].options[0]}</span></div>
        <div class="option"><span>${randomQuestions[index].options[1]}</span></div>
        <div class="option"><span>${randomQuestions[index].options[2]}</span></div>
        <div class="option"><span>${randomQuestions[index].options[3]}</span></div>`;
    
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = randomQuestions[questionCount].answer;
    let allOptions = optionList.children.length;

    console.log(correctAnswer);
    // mudar mecanismo depois
    if(userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    }
    else {
        answer.classList.add('wrong');

        // se alternativa incorreta, auto seleciona a resposta correta
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }

    }

    // Se o usuario selecionar resposta, desabilita as outras alternativas
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} de ${randomQuestions.length} Perguntas`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Pontuação: ${userScore} / ${randomQuestions.length}`;    
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Você acertou ${userScore} de ${randomQuestions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');

    let progressStartValue = -1;
    let progressEndValue = Math.round((userScore / randomQuestions.length) * 100);
    let speed = 30;    

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = ` conic-gradient(#1ba6c0 ${progressStartValue * 3.6}deg, rgba(255, 255, 255, .1) 0deg)`;

        if(progressStartValue >= progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}
