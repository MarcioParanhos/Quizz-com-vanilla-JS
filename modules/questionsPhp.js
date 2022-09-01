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
    question: "Quando o PHP foi criado?",
    answers: [
      { answer: "2000", correct: false },
      { answer: "1990", correct: false },
      { answer: "1995", correct: true },
      { answer: "1994", correct: false },
    ],
  },
  {
    question: "Como declarar uma variavel em PHP?",
    answers: [
      { answer: "$variavel", correct: true },
      { answer: "&variavel", correct: false },
      { answer: "#variavel", correct: false },
      { answer: "@variavel", correct: false },
    ],
  },
  {
    question: "Como importar um arquivo externo com PHP?",
    answers: [
      { answer: "require_import", correct: false },
      { answer: "import_", correct: false },
      { answer: "@import", correct: false },
      { answer: "require_once", correct: true },
    ],
  },
  {
    question: "Qual é a tag mais comum para inserir PHP em HTML??",
    answers: [
      { answer: "<?=> ……… ?>", correct: false },
      { answer: "<?php ……… ?>", correct: true },
      { answer: "<php ……… ?>", correct: false },
      { answer: "<?php ……… ?php>", correct: false },
    ],
  },
  {
    question: "Qual era o antigo nome do PHP?",
    answers: [
      { answer: "Principal Home Page", correct: false },
      { answer: "Personal Hyper Page", correct: false },
      { answer: "Personal Home Page", correct: true },
      { answer: "Principal Hyper Page", correct: false },
    ],
  },
  {
    question: "Como exibir texto com um script PHP?",
    answers: [
      { answer: "print_f", correct: false },
      { answer: "echo e print", correct: true },
      { answer: "system_print", correct: false },
      { answer: "echo e print_f", correct: false },
    ],
  },
  {
    question: "Em qual versão do PHP foi adicionado o POO?",
    answers: [
      { answer: "5", correct: true },
      { answer: "4", correct: false },
      { answer: "6", correct: false },
      { answer: "7", correct: false },
    ],
  },
  {
    question: "Qual dos frameworks abaixo e de PHP?",
    answers: [
      { answer: "React", correct: false },
      { answer: "CodeIgniter", correct: true },
      { answer: "Angular", correct: false },
      { answer: "Express", correct: false },
    ],
  },
  {
    question: "Como você define uma constante em PHP?",
    answers: [
      { answer: "deferer()", correct: false },
      { answer: "definer()", correct: false },
      { answer: "defer()", correct: false },
      { answer: "define()", correct: true },
    ],
  },
  {
    question: "Como é chamado o PHP?",
    answers: [
      { answer: "Hypertext Processor", correct: false },
      { answer: "Hypertext Preprocessor", correct: true },
      { answer: "Page Home Processor", correct: false },
      { answer: "Personal Hyper Parser", correct: false },
    ],
  },
  {
    question: "Quem conhecemos como o pai do PHP?",
    answers: [
      { answer: "Dimitri Lesnter", correct: false },
      { answer: "Hugo Noyer", correct: false },
      { answer: "Rasmus Lerdorf", correct: true },
      { answer: "Leonard Listern", correct: false },
    ],
  },
  {
    question: "O que queremos dizer quando mencionamos MVC?",
    answers: [
      { answer: "Model View Controler", correct: true },
      { answer: "Model View Container", correct: false },
      { answer: "Moviment View Conect", correct: false },
      { answer: "Model Version Controler", correct: false },
    ],
  },
  {
    question: "O que é necessário para usar a função de imagem?",
    answers: [
      { answer: "A biblioteca BM", correct: false },
      { answer: "A biblioteca GD", correct: true },
      { answer: "A biblioteca XT", correct: false },
      { answer: "A biblioteca HR", correct: false },
    ],
  },
  {
    question: "Considere $x = 5 e $y = 7 como imprimir o resultado?",
    answers: [
      { answer: "echo 5 + 7", correct: false },
      { answer: "echo_print $5 + $7", correct: false },
      { answer: "echo $x + $y", correct: true },
      { answer: "print_echo $x + y", correct: false },
    ],
  },
  {
    question: "Qual é a maneira correta de terminar uma instrução PHP?",
    answers: [
      { answer: ";", correct: true },
      { answer: ".  ", correct: false },
      { answer: "New Line", correct: false },
      { answer: "</php>", correct: false },
    ],
  },
  {
    question: "A sintaxe do PHP é mais semelhante a:",
    answers: [
      { answer: "VBScript", correct: false },
      { answer: "Python", correct: false },
      { answer: "Pearl e 'C'", correct: false },
      { answer: "JavaScript", correct: true },
    ],
  },
  {
    question: "Como você obtém informações de um formulário enviado usando o método 'get'?",
    answers: [
      { answer: "Request.QueryString;", correct: false },
      { answer: "$_GET[];", correct: true },
      { answer: "Request.Form;", correct: false },
      { answer: "$_GET.FORM[];", correct: false },
    ],
  },
  {
    question: "Qual é a maneira correta de incluir o arquivo 'time.inc' ?",
    answers: [
      { answer: "<?php include file = 'time.inc'; ?>", correct: false },
      { answer: "<?php include 'time.inc'; ?>", correct: true },
      { answer: "<!-- include file = 'time.inc' -->", correct: false },
      { answer: "<?php include: 'time.inc'; ?>", correct: false },
    ],
  },
  {
    question: "Qual é a maneira correta de criar uma função em PHP?",
    answers: [
      { answer: "creat function myFunction()", correct: false },
      { answer: "create myFunction()", correct: false },
      { answer: "myFunction create()", correct: false },
      { answer: "function myFunction()", correct: true },
    ],
  },
  {
    question: "Qual é a maneira correta de abrir o arquivo 'time.txt' como legível?",
    answers: [
      { answer: "open('time.txt');", correct: true },
      { answer: "fopen('time.txt', r);", correct: false },
      { answer: "open('time.txt', read);", correct: false },
      { answer: "fopen('time.txt', read);", correct: false },
    ],
  },
  {
    question: "Qual variável superglobal contém informações sobre cabeçalhos, caminhos e locais de script?",
    answers: [
      { answer: "$_SERVER", correct: true },
      { answer: "$_GET", correct: false },
      { answer: "$_GLOBALS", correct: false },
      { answer: "$_SESSION", correct: false },
    ],
  },
  {
    question: "Qual é a maneira correta de adicionar 1 à variável $count?",
    answers: [
      { answer: "count + 1;", correct: false },
      { answer: "$count = +1;", correct: false },
      { answer: "count ++;", correct: true },
      { answer: "++ $count;", correct: false },
    ],
  },
  {
    question: "Qual é a maneira correta de adicionar um comentário em PHP?",
    answers: [
      { answer: "<coment>...</coment>", correct: false },
      { answer: "/*...*/", correct: false },
      { answer: "*|...|*", correct: false },
      { answer: "<!--...-->>", correct: true },
    ],
  },
  {
    question: "Qual dessas variáveis ​​tem um nome ilegal?",
    answers: [
      { answer: "my_var", correct: false },
      { answer: "my-var", correct: true },
      { answer: "myVar", correct: false },
      { answer: "myvar", correct: false },
    ],
  },
  {
    question: "Como você cria um cookie em PHP?",
    answers: [
      { answer: "makecookie()", correct: false },
      { answer: "createcookie()", correct: false },
      { answer: "setcookie()", correct: true },
      { answer: "startcookie()", correct: false },
    ],
  },
  {
    question: "Qual operador é usado para verificar se dois valores são iguais e do mesmo tipo de dados?",
    answers: [
      { answer: "===!", correct: false },
      { answer: "=!", correct: false },
      { answer: "=", correct: false },
      { answer: "===", correct: true },
    ],
  },
];

export default questions;
