let counterValue = 0;
let result = document.querySelector("#value");
result.textContent = counterValue;
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
incrementBtn.addEventListener("click", HandleIncreaseValue);
decrementBtn.addEventListener("click", HandleDecreaseValue);

function HandleIncreaseValue() {
  counterValue += 1;
  result.textContent = counterValue;
}
function HandleDecreaseValue() {
  //   if (counterValue <= 0) {
  //     alert("Counter can't be negative");
  //     return;
  //   }
  counterValue -= 1;
  result.textContent = counterValue;
}
