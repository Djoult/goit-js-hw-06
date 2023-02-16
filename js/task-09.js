function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector("button.change-color");
const color = document.querySelector(".color");
changeColorBtn.addEventListener("click", changeBodyColor);
function changeBodyColor() {
  const tempColor = getRandomHexColor();
  document.body.style.background = tempColor;
  color.textContent = document.body.style.background;
}
