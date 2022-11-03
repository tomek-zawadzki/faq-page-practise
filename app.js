const toggle = document.querySelectorAll(".question__div");
const answer = document.querySelectorAll(".question__answer");
const sentence = document.querySelectorAll(".question__sentence");
// const plus = document.querySelectorAll(".plus");
// const minus = document.querySelectorAll(".minus");

// plus.forEach((e, i) => {
//   e.addEventListener("click", () => {
//     answer[i].classList.remove("hidden");
//     plus[i].classList.add("hidden");
//     minus[i].classList.remove("hidden");
//   });
// });

// minus.forEach((e, i) => {
//   e.addEventListener("click", () => {
//     answer[i].classList.add("hidden");
//     plus[i].classList.remove("hidden");
//     minus[i].classList.add("hidden");
//   });
// });

// for (let i = 0; i < answer.length; i++) {
//   answer[i].addEventListener("click", () => {
//     // this.clssList.toggle("active");
//     console.log("ok");
//   });
// }

toggle.forEach((e, i) => {
  e.addEventListener("click", () => {
    answer[i].classList.toggle("active");
    sentence[i].classList.toggle("active");
  });
});
