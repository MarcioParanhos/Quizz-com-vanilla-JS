// DECLARAÇÂO DE VARIAVEIS
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestions = 0;

// PERGUNTAS
// Estrutura de uma pergunta
const questions = [
  {
    question: "PHP foi desenvolvido para qual fim?",
    answers: [
      { answer: "Back-end", correct: true },
      { answer: "Front-end", correct: false },
      { answer: "Sistema Operacional", correct: false },
      { answer: "Banco de dados", correct: false },
    ],
  },
  {
    question: "Qual seletor corresponde ao ID no css?",
    answers: [
      { answer: ";", correct: false },
      { answer: ".", correct: false },
      { answer: "#", correct: true },
      { answer: ">", correct: false },
    ],
  },
  {
    question: "Como declarar uma variavel em JavaScript?",
    answers: [
      { answer: "$let / $var / $const", correct: false },
      { answer: "let / var / const", correct: true },
      { answer: "$=let / $=var / $=const", correct: false },
      { answer: "#let / #var / #const", correct: false },
    ],
  },
];

// SUBISTITUIÇÂO DO QUIZZ PARA A PRIMEIRA PERGUNTA
function init() {
  // Criar a primeira pergunta Aleatoria
  createQuestion(getRandomInt(0, 2));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// cria uma pergunta
function createQuestion(i) {
  //Limpar a questão Anterior
  const oldButtons = answersBox.querySelectorAll("button");
  oldButtons.forEach(function (btn) {
    btn.remove();
  });
  //Alterar o texto da pergunta
  const questionText = question.querySelector("#question-text");
  questionText.textContent = questions[i].question;
  //   Insere as Alternativas
  questions[i].answers.forEach(function (answer, i) {
    //Cria o template do botão do quizz
    const answerTemplate = document
      .querySelector(".answer-template")
      .cloneNode(true);
    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");
    letterBtn.textContent = letters[i];
    answerText.textContent = answer["answer"];
    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    //Remover Hide e Temlate Class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    //Inserir a Alternativa na tela
    answersBox.appendChild(answerTemplate);

    //Inserir evendo de click no botão
    answerTemplate.addEventListener("click", function () {
      checkAnswer(this);
    });
  });

  //Incrementar o numero da questão
  actualQuestions++;
}

//Verificando resposta do usuario
function checkAnswer(btn) {
  // Seleciona todos os botoes
  const buttons = answersBox.querySelectorAll("button");
  //verifica se a resposta esta correta e adiciona classes nos botoes
  buttons.forEach(function (button) {
    if (button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");
      //checa se o usuario acertou a pergunta
      if (btn == button) {
        //incremento dos pontos
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });

  //Exibir proxima pergunta
  nextQuestion();
}
//Exibe prxima pergunt do quizz
function nextQuestion() {
  //Timer para usuario ver as respostas
  setTimeout(function () {
    //Verifica se ainda há perguntas
    if (actualQuestions >= questions.length) {
      //apresenta a mensagem de sucesso
      showSuccessMessage();
      return;
    }
    //Deixar as questões Aleatorias nas proximas perguntas
    createQuestion(getRandomInt(0, 1));
  }, 1500);
}

//Exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();
  //TROCAR DADOS DA TABELA DE SUCESSO
  //   Calcular o score
  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector("#display-score span");
  displayScore.textContent = score.toString();
  //Alterar o numero de perguntas corretas
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;
  //Alterar o total de perguntas
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;
}

//Mostra ou esconde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");
restartBtn.addEventListener("click", function () {
  //zerar o jogo
  actualQuestions = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

//Inicialização do Quizz
init();
