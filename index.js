const toggle = document.getElementById("check");
const slider = document.getElementById("slider");
const progressBar = document.getElementById("progressBar");
const price = document.getElementById("price");
const pageviews = document.getElementById("pageviews");

let discount = toggle.checked;

toggle.addEventListener("input", () => {
  this.checked = !discount;
  discount = this.checked;
});

slider.addEventListener("input", () => {
  let sliderValue = Number(slider.value).toFixed(2);
  progressBar.style.width = `${sliderValue * 3}%`;
  sliderValue = !discount ? sliderValue : sliderValue / 0.25;
  price.textContent = `$${sliderValue}`;
  !discount
    ? (pageviews.textContent = `${sliderValue * 6.25}k`)
    : (pageviews.textContent = `${(sliderValue * 6.25) / 0.25}k`);
});
