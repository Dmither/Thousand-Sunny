let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
burger.addEventListener("click", function() {
  burger.classList.toggle("active")
  menu.classList.toggle("active")
  document.body.classList.toggle("freeze")
})