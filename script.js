const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');

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

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

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

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if(questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        
        questionNumb++;
        questionCounter(questionNumb);
        nextBtn.classList.remove('active');
    }
    else {
        console.log('Quiz finalizado');
    }
}

const optionList = document.querySelector('.option-list');

// carregar as questoes do array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
        <div class="option"><span>${questions[index].options[1]}</span></div>
        <div class="option"><span>${questions[index].options[2]}</span></div>
        <div class="option"><span>${questions[index].options[3]}</span></div>`;
    
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
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
    questionTotal.textContent = `${index} de ${questions.length} Perguntas`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Pontuação: ${userScore} / ${questions.length}`;    
}

function showResultBox() {
    
}