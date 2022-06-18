const acc = document.getElementById("submit");
let quiz = document.getElementById("quiz");
let boutonsRadioDiv = document.querySelectorAll(".radio-bouton label");
let selected = document.querySelectorAll('input[type="radio"]');

acc.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("accueil").style.display = "none";
  quiz.style.display = "flex";
});

let countProgress = 100;
let progressFont = document.querySelector(".font-progress-bar");
setInterval(() => {
  if (countProgress >= 0 && quiz.style.display == "flex") {
    progressFont.style.width = countProgress + "%";
    progressTime.innerHTML = Math.floor(countProgress / 1.666666667);
    countProgress--;
    if (countProgress < 17) {
      progressTime.style.color = "red";
      progressFont.style.backgroundColor = "red";
    }
  }
}, 600);

// boutonsRadioDiv.forEach((div, idx) => {
//   div.addEventListener("click", function (e) {
//     boutonsRadioDiv[idx].style.border = "1px solid #028A3D";
//     boutonsRadioDiv[idx].style.color = "#028A3D";
//     boutonsRadioDiv[idx].style.fontWeight = "600";
//   });
// });

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
  });
});
