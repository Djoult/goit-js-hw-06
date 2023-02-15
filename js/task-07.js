const inputFontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("span");
inputFontSizeControl.addEventListener("input", fontSizeUpdate);
text.style.fontSize = `${inputFontSizeControl.value}` + "px";
console.log(`${inputFontSizeControl.value} px`);

// console.log(text.style.fontSize.value);
function fontSizeUpdate() {
  text.style.fontSize = `${inputFontSizeControl.value}px`;
  console.log(`${inputFontSizeControl.value} px`);
}
