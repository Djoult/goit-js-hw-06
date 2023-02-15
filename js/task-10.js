function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
const controls = {
  inputValue: document.querySelector("input[type=number]"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};
const boxes = document.querySelector("#boxes");
controls.btnCreate.addEventListener("click", createBoxes);
controls.btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  destroyBoxes();
  let amount = controls.inputValue.value;
  for (let i = 0; i < amount; i++) {
    const x = i * 10 + 30;
    console.log(x);
    let randColor = getRandomHexColor();
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div class="new-box"  style =  background:${randColor};width:${x}px;height:${x}px ></div>`
    );
  }
}
boxes.addEventListener("mouseenter", changeBoxDirection);
boxes.addEventListener("mouseleave", changeBoxDirection);
function changeBoxDirection() {
  boxes.classList.toggle("reversed");
}
// inputI.value = "10";
// console.log(controls.inputValue);
