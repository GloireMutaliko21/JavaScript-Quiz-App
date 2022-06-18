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

let border = document.querySelectorAll('input[type="radio"]');
border.forEach((label, index) => {
  label.addEventListener("change", function (e) {
    for (let i = 0; i < border.length; i++) {
      boutonsRadioDiv[i].style.border = "1px solid #bbb8b8";
      boutonsRadioDiv[i].style.fontWeight = "400";
      boutonsRadioDiv[i].style.color = "";
    }
    if (border[index].checked != false) {
      boutonsRadioDiv[index].style.border = "1px solid #028A3D";
      boutonsRadioDiv[index].style.color = "#028A3D";
      boutonsRadioDiv[index].style.fontWeight = "600";
    }
  });
});

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

document.getElementById("quitter").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(border);
  console.log(border[0].checked);
  console.log(border[1].checked);
  console.log(border[2].checked);
  console.log(border[3].checked);
});
