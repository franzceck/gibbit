const timeMenu = document.querySelector("#time-menu");
const sortMenu = document.querySelector("#sort-menu");
const timeBtn = document.querySelector(".time-btn");
const sortBtn = document.querySelector(".sort-btn");

sortBtn.addEventListener("click", () => {
  sortMenu.classList.toggle("active");
  timeMenu.classList.remove("active2");
});

timeBtn.addEventListener("click", () => {
  timeMenu.classList.toggle("active2");
  sortMenu.classList.remove("active");
});
