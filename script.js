const acc = document.getElementById("submit");
let quiz = document.getElementById("quiz");
let countProgress = 100;

let boutonsRadioDiv = document.querySelectorAll(".radio-bouton label");
let selected = document.querySelectorAll('input[type="radio"]');
let idQuestion = 1;
let nombreQuestion = document.querySelector(".progress-questions");
let score = 0;
let reponse = "";

//Enoncé de la question
let idEnonce = document.getElementById("enonce");

//Les assertions

let ass1 = document.getElementById("ass1");
let ass2 = document.getElementById("ass2");
let ass3 = document.getElementById("ass3");
let ass4 = document.getElementById("ass4");

//Questions
const questions = [
  {},
  {},
  {
    enonce: "Comment faire appelle à une fonction nommée « sum »?",
    assertions: [
      "sum()",
      "call function sum()",
      "call sum()",
      "Aucune réponse.",
    ],
    reponse: "sum()",
  },

  {
    enonce:
      "Quelle est la syntaxe correcte pour faire référence à un script externe appelé « myscript.js »??",
    assertions: [
      'script href=myscript.js"',
      'script name="myscript.js"',
      'script src="myscript.js"',
      "Tout les réponses sont vrais",
    ],
    reponse: 'script src="myscript.js"',
  },

  {
    enonce: "Comment écrire une condition IF en JavaScript?",
    assertions: ["if a = 2 then", "if a = 2", "if a == 2 else", "if (a == 2)"],
    reponse: "if (a == 2)",
  },

  {
    enonce:
      "Comment écrire une condition IF pour vérifier si « a » n’est PAS égal à 2?",
    assertions: ["if a <> 2", "if (a != 2)", "if a =! 2 then", "if (a <> 2)"],
    reponse: "if (a != 2)",
  },
];

//Boucle réinitialiser les radio-boutons

function reset() {
  for (let i = 0; i < selected.length; i++) {
    boutonsRadioDiv[i].style.border = "1px solid #bbb8b8";
    boutonsRadioDiv[i].style.fontWeight = "400";
    boutonsRadioDiv[i].style.color = "";
  }
}

function questionSuivant() {
  idQuestion++;
  countProgress = 101;
  nombreQuestion.innerHTML = "Question " + idQuestion + "/15";
  suivant.disabled = true;
  for (let i = 0; i < selected.length; i++) {
    selected[i].checked = false;
  }

  reset();
  idEnonce.innerHTML = questions[idQuestion].enonce;

  ass1.innerHTML = questions[idQuestion].assertions[0];
  ass2.innerHTML = questions[idQuestion].assertions[1];
  ass3.innerHTML = questions[idQuestion].assertions[2];
  ass4.innerHTML = questions[idQuestion].assertions[3];
}

//Passer à la question suivante
suivant.addEventListener("click", function (e) {
  e.preventDefault();
  questionSuivant();
});

acc.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("accueil").style.display = "none";
  quiz.style.display = "flex";
});

//ProgressBar Timer

let progressFont = document.querySelector(".font-progress-bar");
setInterval(() => {
  if (countProgress >= 0 && quiz.style.display == "flex") {
    progressFont.style.width = countProgress + "%";
    progressTime.innerHTML = Math.floor(countProgress / 1.666666667);
    countProgress--;
  }
  if (countProgress < 0) {
    questionSuivant();
  }
}, 600);

//Changer le style de bordure pour le choix sélectionné

function border(index) {
  for (let i = 0; i < selected.length; i++) {
    reset();
  }
  if (selected[index].checked != false) {
    boutonsRadioDiv[index].style.border = "1px solid #028A3D";
    boutonsRadioDiv[index].style.color = "#028A3D";
    boutonsRadioDiv[index].style.fontWeight = "600";
  }
}

// Cette fonction vérifie si une option est cochée pour activer le bouton suivant

function check() {
  for (const select of selected) {
    if (select.checked) {
      document.getElementById("suivant").disabled = false;
      break;
    } else {
      document.getElementById("suivant").disabled = true;
    }
  }
}

// Ce bloc écoute l'évenement de changement des boutons radio
selected.forEach((radio, idx) => {
  radio.addEventListener("change", function (e) {
    check();
    border(idx);
  });
});
