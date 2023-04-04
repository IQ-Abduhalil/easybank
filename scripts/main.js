var burger = document.querySelector(".header__burger");
var overlay = document.querySelector(".overlay");
var mobileModal = document.querySelector(".mobile__modal");
var down = document.querySelector(".intro__img-mobile");
var Top = document.querySelector(".intro__title");
var button = document.querySelector(".header__btn");
var body = document.querySelector("body");

button.addEventListener("click", function () {
  body.classList.toggle("dark");
});

burger.addEventListener("click", function () {
  burger.classList.toggle("crossed");
  overlay.classList.toggle("visible");
  mobileModal.classList.toggle("show");
  down.classList.toggle("down");
  Top.classList.toggle("top");
});
