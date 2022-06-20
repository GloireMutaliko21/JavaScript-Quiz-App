const acc = document.getElementById("submit");
const quiz = document.getElementById("quiz");
const resultatQuiz = document.getElementById("resultat");
const imageResultat = document.getElementById('image')
const quitter = document.getElementById('quitter');
const finalScore = document.getElementById('finalScore');
const nom = document.getElementById('nom');
const mail = document.getElementById('mail');
const namePlayer = document.getElementById('name');
const emailPlayer = document.getElementById('email');

let countProgress = 100;

let player = {
  "name": "",
  "mail": ""
}

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
  {
    enonce: "Dans quel balise HTML plaçons-nous le code JavaScript ?",
    assertions: [
      "La balise js",
      "La balise javascript",
      "La balise script",
      "La balise rel",
    ],
    reponse: "La balise script",
  },
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
  {
    enonce:
      "Comment créer une fonction en JavaScript?",
    assertions: ["function f()", "function = f()", "function:f()", "Aucune de ces réponses n’est vraie."],
    reponse: "function f()",
  },
  {
    enonce:
      "Quelle est la syntaxe correcte pour vérifier la valeur de « c » ?",
    assertions: ['if (c == "XYZ") then { } else { }', 'if (c = "XYZ") then { } else { }', 'if (c == "XYZ") { } else { }', 'if (c = "XYZ") { } else { }'],
    reponse: 'if (c == "XYZ") { } else { }',
  },
  {
    enonce:
      "Quel est le bon endroit pour insérer un code JavaScript?",
    assertions: ["La section head", "Les deux sections head et body sont correctes", "La section body", "Aucune de ces réponses n’est vraie."],
    reponse: "Les deux sections head et body sont correctes",
  },
  {
    enonce:
      "Comment écrivez-vous « Hello World » dans une boîte d’alerte?",
    assertions: ['msg("Hello World");', 'alert("Hello World");', 'msgBox("Hello World");', 'alertBox("Hello World");'],
    reponse: 'alert("Hello World");',
  },
  {
    enonce:
      "Quel est l’objet qui se trouve dans TOP de la racine en JavaScript ?",
    assertions: ["url", "top", "window", "document"],
    reponse: "window",
  },
  {
    enonce:
      "Comment trouvez-vous le nombre avec la plus grande valeur de « a » et « b »?",
    assertions: ["Math.ceil(a, b)", "Math.max(a, b)", "ceil(a, b)", "top(a, b)"],
    reponse: "Math.max(a, b)",
  },
  {
    enonce:
      "Comment pouvez-vous ajouter un commentaire dans un code JavaScript?",
    assertions: ["//Ceci est un commentaire", '"Ceci est un commentaire"', "vide", "#Ceci est un commentaire"],
    reponse: "//Ceci est un commentaire",
  },
  {
    enonce:
      "Comment arrondir le nombre 3.12 à un nombre entier plus proche?",
    assertions: ["Math.round(3.12)", "Math.rnd(3.12)", "float(3.12)", "Math.float(3.12)"],
    reponse: "Math.round(3.12)",
  },
  {
    enonce:
      "Quelle est la syntaxe correct de la boucle while?",
    assertions: ["while i = 1 to 5", "while (i <= 5)", "while (i=0; i <= 5; i++)", "while (i <= 5; i++)"],
    reponse: "while (i <= 5)",
  },
  {
    enonce:
      "Quelle est la syntaxe correct de la boucle for?",
    assertions: ["for (i <= 10; i++)", "for i = 1 to 10", "for (i = 0; i <= 10)", "for (i = 0; i <= 10; i++)"],
    reponse: "for (i = 0; i <= 10; i++)",
  },
];

//Vérification input nom

function verifyNom() {
  if (nom.value.length == 0) {
    erreurNom.innerHTML = "Veuillez renseigner votre nom";
    return false;
  } else if (nom.value.length <= 2) {
    erreurNom.innerHTML = "Entrer un nom valide"
    return false;
  } else {
    erreurNom.innerHTML = ""
  }
  return true;
}

//Vérification de l'adresse mail

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


nom.addEventListener("input", function () {
  verifyNom();
});

mail.addEventListener("input", function () {
  if (validateEmail(mail.value)) {
    erreurMail.innerHTML = "";
  } else {
    mail.value.length == 0 ? erreurMail.innerHTML = "Veuillez entre votre mail" : erreurMail.innerHTML = "Entrer un e-mail valide"
  }

});
//Boucle réinitialiser les radio-boutons

function reset() {
  for (let i = 0; i < selected.length; i++) {
    boutonsRadioDiv[i].style.border = "1px solid #bbb8b8";
    boutonsRadioDiv[i].style.fontWeight = "400";
    boutonsRadioDiv[i].style.color = "";
  }
}
// Fonction de changement des questions

function questionSuivant() {
  scoreIncrease();
  idQuestion++;
  countProgress = 100;
  secondes = 60;
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

// Gestion du score selon la réponse choisie

function scoreIncrease() {
  reponse == questions[idQuestion].reponse ? score++ : score;
}

//Passer au résultat 
function result() {
  quiz.style.display = "none";
  resultatQuiz.style.display = "flex";
  finalScore.textContent = score + "/15"
  if (score <= 7) {
    imageResultat.innerHTML = '<svg width="174" height="174" viewBox="0 0 174 174" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M116.464 60.2891C116.464 59.5414 115.852 58.9297 115.105 58.9297L103.89 58.9807L86.9996 79.1164L70.1264 58.9977L58.8945 58.9467C58.1469 58.9467 57.5352 59.5414 57.5352 60.3061C57.5352 60.6289 57.6541 60.9348 57.858 61.1897L79.9648 87.5275L57.858 113.848C57.6527 114.097 57.5388 114.409 57.5352 114.732C57.5352 115.48 58.1469 116.091 58.8945 116.091L70.1264 116.04L86.9996 95.9047L103.873 116.023L115.088 116.074C115.835 116.074 116.447 115.48 116.447 114.715C116.447 114.392 116.328 114.086 116.124 113.831L94.0514 87.5105L116.158 61.1727C116.362 60.9348 116.464 60.6119 116.464 60.2891Z" fill="#FF3838"/><path d="M87 11.0469C44.9613 11.0469 10.875 45.1332 10.875 87.1719C10.875 129.211 44.9613 163.297 87 163.297C129.039 163.297 163.125 129.211 163.125 87.1719C163.125 45.1332 129.039 11.0469 87 11.0469ZM87 150.383C52.098 150.383 23.7891 122.074 23.7891 87.1719C23.7891 52.2699 52.098 23.9609 87 23.9609C121.902 23.9609 150.211 52.2699 150.211 87.1719C150.211 122.074 121.902 150.383 87 150.383Z" fill="#FF3838"/></svg>';
  }
}

//Passer à la question suivante ou au résultat
suivant.addEventListener("click", function (e) {
  e.preventDefault();
  if (idQuestion >= 15) {
    scoreIncrease();
    identite();
    result();
  } else {
    questionSuivant();
  }
  if (idQuestion == 15) {
    suivant.textContent = "Terminer"
  }

});

//Quitter le jeu
quitter.addEventListener("click", function (e) {
  e.preventDefault();
  identite();
  result();
})

//Passer aux questions après avoir fourni le nom et le mail
acc.addEventListener("click", function (e) {
  e.preventDefault();
  const x = mail.value; // Mail value
  let domaine = x.substring(x.lastIndexOf('.') + 1, x.length).length; // longueur du tld
  let nomDomaine = x.substring(x.indexOf('@') + 1, x.lastIndexOf('.')).length//longuer du domaine
  let idUser = x.substring(0, x.indexOf('@')).length;

  const i = domaine > 1 && domaine < 4 && nomDomaine > 2 && idUser > 2 && verifyNom() && validateEmail(x); // Booléen mail valide
  if (i) {
    player.name = nom.value;
    player.mail = x;
    document.getElementById("accueil").style.display = "none";
    quiz.style.display = "flex";
  } else {
    x.length == 0 ? erreurMail.innerHTML = "Veuillez entre votre mail" : erreurMail.innerHTML = "Entrer un e-mail valide"
  };

});

//ProgressBar Timer

let progressFont = document.querySelector(".font-progress-bar");
setInterval(() => {
  if (countProgress >= 0 && quiz.style.display == "flex") {
    progressFont.style.width = countProgress + "%";
    countProgress--;
  }
  if (countProgress < 0) {
    if (idQuestion >= 15) {
      scoreIncrease();
      identite();
      result();
      idQuestion = 1;
    } else {
      questionSuivant();
    }
  }
}, 600);

let secondes = 60;

setInterval(function () {
  if (secondes > 0) {
    if (quiz.style.display == "flex") {
      document.getElementById("progressTime").innerHTML = secondes;
      secondes--;
    }
  }
}, 1000);
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
    reponse = questions[idQuestion].assertions[idx];
  });
});

//identifiants

function identite() {
  namePlayer.innerHTML = player.name;
  emailPlayer.innerHTML = player.mail;
}
