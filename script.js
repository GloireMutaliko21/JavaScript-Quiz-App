const acc = document.getElementById("submit");
let quiz = document.getElementById("quiz");
acc.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("accueil").style.display = "none";
  quiz.style.display = "flex";
});

let countProgress = 100;
let progressFont = document.querySelector(".font-progress-bar");
setInterval(() => {
  if (countProgress >= 0 && quiz.style.display == "flex") {
    progressFont.style.width =
      countProgress + "%";
    progressTime.innerHTML = Math.floor(countProgress / 1.666666667);
    countProgress--;
    if (countProgress < 17) {
        progressTime.style.color = "red";
        progressFont.style.backgroundColor = "red";
    }
  }
}, 600);
