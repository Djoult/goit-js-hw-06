const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", OnTextInput);
function OnTextInput() {
  let name = nameInput.value.trim();
  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
}
