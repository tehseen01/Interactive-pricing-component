const toggle = document.querySelector(".toggle");
const slider = document.getElementById("slider");
const progressBar = document.getElementById("progressBar");
const price = document.getElementById("price");
const pageviews = document.getElementById("pageviews");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("left-right");
});

pageviews.textContent = `${slider.value * 2}k `;

slider.oninput = function () {
  let dollar = slider.value / 3;
  let dd = dollar.toFixed(2);
  progressBar.style.width = slider.value + "%";
  price.textContent = `$ ${dd}`;
  pageviews.textContent = `${slider.value * 2}K `;
};
