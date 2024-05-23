const toggle_btn = document.querySelector(".toggle-btn");

toggle_btn.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});