// DECLARAÇÂO DE VARIAVEIS
const question = document.querySelector("#question");
const questionNumber = document.querySelector("#question-number");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestions = 0;
let numberNoRepeat = [];

// Pega o parametro passado pela url
var query = location.search.slice(1);
var partes = query.split("&");
var data = {};
partes.forEach(function (parte) {
  var chaveValor = parte.split("=");
  var chave = chaveValor[0];
  var valor = chaveValor[1];
  data[chave] = valor;
});

// Import das questões de cada tecnologia
import questionsPhp from "../modules/questionsPhp.js";
import questionsJs from "../modules/questionsJs.js";

if (data.tech === "php") {
  console.log(questionsPhp.length);

  // PERGUNTAS
  // SUBISTITUIÇÂO DO QUIZZ PARA A PRIMEIRA PERGUNTA
  function init() {
    const languageTitle = document.querySelector("#language-title");
    languageTitle.textContent = "PHP"
    //Zera o array de consulta de numero aleatorio ao iniciar o jogo novamente
    numberNoRepeat = [];
    // Criar a primeira pergunta Aleatoria
    createQuestion(getRandomInt(0, questionsPhp.length));
  }
  //Função para gerar numero aleatorio
  function getRandomInt(min, max) {
    const numberRandom = Math.floor(Math.random() * (max - min)) + min;
    if (numberNoRepeat.indexOf(numberRandom) === -1) {
      numberNoRepeat.push(numberRandom);
      return numberRandom;
    } else {
      //Chama uma função pra escolher outro numero aleatorio caso o numero ja foi sorteado
      nextQuestionRandom();
    }
  }
  function nextQuestionRandom() {
    //Timer para usuario ver as respostas
    setTimeout(function () {
      //Deixar as questões Aleatorias nas proximas perguntas
      createQuestion(getRandomInt(0, questionsPhp.length));
    }, 0);
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
    const questionNum = questionNumber.querySelector("#select-number");
    questionText.textContent = questionsPhp[i].question;
    questionNum.textContent = numberNoRepeat.length;
    //   Insere as Alternativas
    questionsPhp[i].answers.forEach(function (answer, i) {
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
      if (actualQuestions >= 15) {
        //apresenta a mensagem de sucesso
        showSuccessMessage();
        return;
      }
      //Deixar as questões Aleatorias nas proximas perguntas
      createQuestion(getRandomInt(0, questionsPhp.length));
    }, 1500);
  }

  //Exibe a tela final
  function showSuccessMessage() {
    hideOrShowQuizz();
    //TROCAR DADOS DA TABELA DE SUCESSO
    //   Calcular o score
    const score = ((points / 15) * 100).toFixed(2);
    const displayScore = document.querySelector("#display-score span");
    displayScore.textContent = score.toString();
    //Alterar o numero de perguntas corretas
    const correctAnswers = document.querySelector("#correct-answers");
    correctAnswers.textContent = points;
    //Alterar o total de perguntas
    const totalQuestions = document.querySelector("#questions-qty");
    totalQuestions.textContent = 15;
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

  //INICIO DO CODIGO DE JAVA SCRIPT
}

if (data.tech === "js") {
  console.log(questionsJs.length);

  // PERGUNTAS
  // SUBISTITUIÇÂO DO QUIZZ PARA A PRIMEIRA PERGUNTA
  function init() {
    const languageTitle = document.querySelector("#language-title");
    languageTitle.textContent = "JavaScript"
    //Zera o array de consulta de numero aleatorio ao iniciar o jogo novamente
    numberNoRepeat = [];
    // Criar a primeira pergunta Aleatoria
    createQuestion(getRandomInt(0, questionsJs.length));
  }
  //Função para gerar numero aleatorio
  function getRandomInt(min, max) {
    const numberRandom = Math.floor(Math.random() * (max - min)) + min;
    if (numberNoRepeat.indexOf(numberRandom) === -1) {
      numberNoRepeat.push(numberRandom);
      return numberRandom;
    } else {
      //Chama uma função pra escolher outro numero aleatorio caso o numero ja foi sorteado
      nextQuestionRandom();
    }
  }
  function nextQuestionRandom() {
    //Timer para usuario ver as respostas
    setTimeout(function () {
      //Deixar as questões Aleatorias nas proximas perguntas
      createQuestion(getRandomInt(0, questionsJs.length));
    }, 0);
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
    const questionNum = questionNumber.querySelector("#select-number");
    questionText.textContent = questionsJs[i].question;
    questionNum.textContent = numberNoRepeat.length;
    //   Insere as Alternativas
    questionsJs[i].answers.forEach(function (answer, i) {
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
      if (actualQuestions >= 15) {
        //apresenta a mensagem de sucesso
        showSuccessMessage();
        return;
      }
      //Deixar as questões Aleatorias nas proximas perguntas
      createQuestion(getRandomInt(0, questionsJs.length));
    }, 1500);
  }

  //Exibe a tela final
  function showSuccessMessage() {
    hideOrShowQuizz();
    //TROCAR DADOS DA TABELA DE SUCESSO
    //   Calcular o score
    const score = ((points / 15) * 100).toFixed(2);
    const displayScore = document.querySelector("#display-score span");
    displayScore.textContent = score.toString();
    //Alterar o numero de perguntas corretas
    const correctAnswers = document.querySelector("#correct-answers");
    correctAnswers.textContent = points;
    //Alterar o total de perguntas
    const totalQuestions = document.querySelector("#questions-qty");
    totalQuestions.textContent = 7;
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

  //INICIO DO CODIGO DE JAVA SCRIPT
}
