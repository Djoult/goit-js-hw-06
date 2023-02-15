const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", checkInputContent);
const DATA_LENGTH = validationInput.getAttribute("data-length");
function checkInputContent() {
  const inputLength = validationInput.value.length;
  if (inputLength == 0) {
    validationInput.classList.remove("valid");
    validationInput.classList.remove("invalid");
  } else if (inputLength == DATA_LENGTH) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else if (inputLength != DATA_LENGTH) {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
