const answer = document.querySelectorAll(".question__answer");
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");

plus.forEach((e, i) => {
  e.addEventListener("click", () => {
    answer[i].classList.remove("hidden");
    plus[i].classList.add("hidden");
    minus[i].classList.remove("hidden");
  });
});

minus.forEach((e, i) => {
  e.addEventListener("click", () => {
    answer[i].classList.add("hidden");
    plus[i].classList.remove("hidden");
    minus[i].classList.add("hidden");
  });
});

